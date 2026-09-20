'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

/**
 * A band that pins to the viewport and pans a horizontal track one step per
 * scroll gesture. Used by the About journey and the services catalogue.
 *
 * The section is `count` viewports tall; its sticky child holds the screen while
 * vertical scroll progress (0..1) drives the track. `pinned` is false on phones,
 * under `prefers-reduced-motion`, and until JS runs — callers render their plain
 * stacked layout then, so content can never be stranded off-screen.
 */

const PINNED_QUERY = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

// Scroll progress with a short rest at every step: the track holds still for the
// first and last tenth of each leg and eases across the rest, so a step settles
// instead of being caught mid-slide.
export const dwell = (progress: number, last: number) => {
  if (last < 1) return 0;
  const leg = Math.min(last, Math.max(0, progress * last));
  const i = Math.min(last - 1, Math.floor(leg));
  const f = Math.min(1, Math.max(0, (leg - i - 0.1) / 0.8));
  return (i + f * f * (3 - 2 * f)) / last;
};

// Which step one wheel gesture should land on, from a track position in legs
// (0..last). Off a stop, it finishes the leg in the scroll direction. Null past
// either end: the page scrolls on normally, out of the band.
export const nextStop = (leg: number, direction: 1 | -1, last: number) => {
  const target = direction === 1 ? Math.floor(leg + 0.02) + 1 : Math.ceil(leg - 0.02) - 1;
  return target < 0 || target > last ? null : target;
};

// Where step `index` sits for a track position of 0..1: fully shown while the
// track rests on it, dimmed and dropped 32px as the track moves away.
export const panelPose = (position: number, index: number, last: number) => {
  if (last < 1) return { opacity: 1, y: 0 };
  const half = 1 / last / 2;
  const distance = Math.abs(position - index / last);
  const away = Math.min(1, Math.max(0, (distance - half * 0.5) / (half * 1.1)));
  return { opacity: 1 - away * 0.85, y: position < index / last ? away * 32 : 0 };
};

export const usePinnedSteps = <T extends HTMLElement = HTMLElement>(count: number) => {
  const last = count - 1;
  const ref = useRef<T>(null);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia(PINNED_QUERY);
    const sync = () => setPinned(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  // Function transforms, not [input] -> [output] ranges: Framer hands scroll-linked
  // ranges to Element.animate as keyframe offsets, which must stay inside 0..1.
  const position = useTransform(scrollYProgress, (p) => dwell(p, last));
  const x = useTransform(position, (p) => `${-p * last * 100}vw`);
  useMotionValueEvent(position, 'change', (p) => setActive(Math.round(p * last)));

  // Glide to the point where the track rests on a step.
  const glide = useRef<{ stop: () => void } | null>(null);
  const settledAt = useRef(0);
  const goTo = (index: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const target = top + (index / Math.max(1, last)) * (el.offsetHeight - window.innerHeight);
    glide.current?.stop();
    glide.current = animate(window.scrollY, target, {
      duration: 0.7,
      ease: 'linear', // `dwell` already eases the track
      onUpdate: (v) => window.scrollTo(0, v),
      onComplete: () => {
        glide.current = null;
        settledAt.current = performance.now();
      },
    });
  };
  const goToRef = useRef(goTo);
  useEffect(() => {
    goToRef.current = goTo;
  });

  // One scroll, one step. While the band is pinned, a wheel gesture glides to the
  // neighbouring stop instead of scrolling freely; past the first or last stop
  // the wheel is left alone so the page carries on.
  useEffect(() => {
    if (!pinned) return;
    let lastAbs = 0;
    let lastAt = 0;
    const onWheel = (e: WheelEvent) => {
      const el = ref.current;
      if (!el || e.ctrlKey || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      const rect = el.getBoundingClientRect();
      if (rect.top > 1 || rect.bottom < window.innerHeight - 1) return; // not pinned right now

      // A trackpad keeps sending shrinking deltas long after the fingers lift.
      // Only a pause or a growing delta counts as a new gesture.
      const abs = Math.abs(e.deltaY);
      const fresh = e.timeStamp - lastAt > 150 || abs > lastAbs + 4;
      lastAbs = abs;
      lastAt = e.timeStamp;

      // Swallow the rest of the gesture that started the glide, so its tail can
      // neither skip a step nor nudge the page out of the band.
      if (glide.current || (!fresh && e.timeStamp - settledAt.current < 1000)) return e.preventDefault();
      const leg = (-rect.top / (el.offsetHeight - window.innerHeight)) * last;
      const target = nextStop(leg, e.deltaY > 0 ? 1 : -1, last);
      if (target === null) return;
      e.preventDefault();
      if (fresh) goToRef.current(target);
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel);
      glide.current?.stop();
      glide.current = null;
    };
  }, [pinned, last]);

  return { ref, pinned, active, goTo, position, progress: scrollYProgress, x, last };
};
