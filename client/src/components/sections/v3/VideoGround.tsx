'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import type { MotionStyle, MotionValue } from 'framer-motion';
import { Hero } from '../Hero';
import { useMounted } from '../../../hooks/useMounted';

// Pause the hero clip once it is buried under the chapters — the ground is
// sticky for the whole page, so the video would otherwise keep decoding under
// an .86 scrim for the rest of the scroll. Resumes on the way back up.
const FREEZE_VIDEO_WHEN_BURIED = true;
// Desktop spec height; replaced by window.innerHeight after mount.
const DEFAULT_VH = 900;

// `MotionStyle` has no index signature for custom properties; framer does render
// them (setProperty), the type just needs to be told.
type GroundStyle = MotionStyle & { '--hero-copy': MotionValue<number> };

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

  const groundStyle: GroundStyle = { '--hero-copy': heroCopy };

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
