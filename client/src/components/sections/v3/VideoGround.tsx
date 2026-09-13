'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import type { MotionStyle, MotionValue } from 'framer-motion';
import { Hero } from '../Hero';
import { useMounted } from '../../../hooks/useMounted';

// The owner wants the ground to keep looping for the whole scroll (it stays
// faintly visible under the scrim). Flip to true to pause it once buried
// (saves decoding on weak devices; resumes on the way back up).
const FREEZE_VIDEO_WHEN_BURIED = false;
// Desktop spec height; replaced by window.innerHeight after mount.
const DEFAULT_VH = 900;

// `MotionStyle` has no index signature for custom properties; framer does render
// them (setProperty), the type just needs to be told.
type GroundStyle = MotionStyle & { '--hero-copy': MotionValue<number>; '--hero-scrims': MotionValue<number> };

/**
 * The hero, made sticky for the full page height and dimmed by a scrubbed scrim
 * as the chapters scroll over it. This wrapper carries no transform and no
 * filter so `position: sticky` (and the header's fixed pills) stay sound.
 *
 * Resting/SSR state: scrim at 0, `--hero-copy` unset -> Hero reads
 * `var(--hero-copy, 1)`, i.e. fully readable. The scrub is position-based, so a
 * hidden tab never strands it mid-way.
 */
export function VideoGround() {
  const wrap = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const [vh, setVh] = useState(DEFAULT_VH);

  // `layoutEffect: false` is gone in framer 12 (the hook is isomorphic now).
  const { scrollY } = useScroll();
  // Piecewise ≈ easeOut: most of the dim lands in the first third of a viewport.
  const dim = useTransform(scrollY, [0, 0.35 * vh, vh], [0, 0.55, 0.86]);
  const heroCopy = useTransform(scrollY, [0, 0.5 * vh], [1, 0]);
  // The hero's own legibility scrims go once the copy is gone, so the ground
  // under the chapters is the same 14%-visible video on every device.
  const heroScrims = useTransform(scrollY, [0.55 * vh, 1.05 * vh], [1, 0]);

  useEffect(() => {
    const measure = () => setVh(window.innerHeight);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Freeze eligibility (motion allowed) and a latch so play/pause fires once
  // per crossing rather than on every scroll event.
  const canFreeze = useRef(false);
  const frozen = useRef(false);
  useEffect(() => {
    if (!FREEZE_VIDEO_WHEN_BURIED) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    canFreeze.current = !reduce;
  }, []);
  useMotionValueEvent(scrollY, 'change', (y) => {
    if (!canFreeze.current) return;
    const buried = y > 1.2 * vh;
    if (buried === frozen.current) return;
    frozen.current = buried;
    const video = wrap.current?.querySelector('video');
    if (!video) return;
    if (buried) video.pause();
    // play() rejects when autoplay is blocked; the poster stays up, fine.
    else video.play().catch(() => {});
  });

  const groundStyle: GroundStyle = { '--hero-copy': heroCopy, '--hero-scrims': heroScrims };

  // Playback watchdog. Mobile browsers pause autoplay video they judge
  // off-screen or occluded (the sticky ground sits under 86% of ink), and
  // nothing else would restart it. Re-play on every signal we get, unless the
  // pause is ours (reduced motion, or the buried freeze above).
  useEffect(() => {
    const video = wrap.current?.querySelector('video');
    if (!video) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let raf = 0;
    const nudge = () => {
      if (document.hidden || frozen.current || !video.paused) return;
      video.play().catch(() => {});
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        nudge();
      });
    };
    const onPause = () => {
      // A browser-initiated pause fires this too; retry on the next frame.
      if (!frozen.current) requestAnimationFrame(nudge);
    };
    // Autoplay refused (data/power saving modes, Low Power Mode): the first
    // touch or click anywhere counts as the user gesture browsers want.
    const onGesture = () => {
      nudge();
      if (!video.paused) {
        document.removeEventListener('touchstart', onGesture);
        document.removeEventListener('pointerdown', onGesture);
      }
    };
    document.addEventListener('touchstart', onGesture, { passive: true });
    document.addEventListener('pointerdown', onGesture, { passive: true });
    const io = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(nudge) : null;
    io?.observe(video);
    video.addEventListener('pause', onPause);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', nudge);
    const tick = window.setInterval(nudge, 2500);
    return () => {
      io?.disconnect();
      video.removeEventListener('pause', onPause);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', nudge);
      document.removeEventListener('touchstart', onGesture);
      document.removeEventListener('pointerdown', onGesture);
      window.clearInterval(tick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    // `[&>section]:min-h-full`: Hero keeps `min-h-screen` (100vh = the LARGE
    // viewport on phones), which would overflow this 100svh box and clip the
    // bottom-anchored copy behind the browser toolbar. Pinning it to 100% of the
    // wrapper makes it exactly one small viewport; identical on desktop.
    <motion.div
      ref={wrap}
      data-chapter="hero"
      className="sticky top-0 z-0 h-[100svh] overflow-hidden [&>section]:min-h-full"
      style={mounted ? groundStyle : undefined}
    >
      <Hero />
      {/* Scrim — the only element with will-change; opacity 0 at rest. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-[5] pointer-events-none fs-scrim will-change-[opacity]"
        style={{ opacity: mounted ? dim : 0 }}
      />
    </motion.div>
  );
}
