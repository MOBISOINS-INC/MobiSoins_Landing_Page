'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

type Phase = 'idle' | 'armed' | 'in';

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

/**
 * Choreographed scroll entrance for a block: a rule draws in, text rises in a
 * stagger, a photo wipes open.
 *
 * Same safety contract as useReveal — content can never be stranded invisible:
 *  - `idle` (server render, no IntersectionObserver, reduced motion, or a block
 *    already on screen at mount) is the plain, fully visible resting state.
 *  - A block is only hidden (`armed`) once JS has confirmed it sits below the
 *    fold AND an observer is attached that will reveal it.
 *  - The entrance itself is a CSS animation, which runs on the document
 *    timeline, so it completes even if the tab is backgrounded mid-way.
 */
export const useScrollMotion = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);
  const [phase, setPhase] = useState<Phase>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const below = el.getBoundingClientRect().top > window.innerHeight * 0.92;
    if (below) setPhase('armed');

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setPhase('in');
      cleanup();
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal();
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    io.observe(el);
    // Belt and braces: observers are throttled in background tabs and can miss
    // a block during a fast jump (anchor links in the specialty index), so a
    // cheap scroll check reveals anything that is on screen or already passed.
    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) reveal();
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    function cleanup() {
      io.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    }
    return cleanup;
  }, []);

  const hidden = phase === 'armed';
  const play = phase === 'in';

  /** Text and rows: fade up. `i` staggers siblings. */
  const rise = (i = 0, base = 0): CSSProperties =>
    play
      ? { animation: `slideUp 0.7s ${EASE} backwards`, animationDelay: `${base + i * 0.06}s` }
      : hidden
      ? { opacity: 0 }
      : {};

  /** A horizontal rule that draws in from the left. */
  const rule = (delay = 0): CSSProperties =>
    play
      ? { transformOrigin: 'left', animation: `ruleDraw 0.9s ${EASE} backwards`, animationDelay: `${delay}s` }
      : hidden
      ? { transformOrigin: 'left', transform: 'scaleX(0)' }
      : {};

  /** A photo that wipes open from the top while settling from a slight zoom. */
  const photo = (delay = 0): CSSProperties =>
    play
      ? { animation: `photoReveal 1.1s ${EASE} backwards`, animationDelay: `${delay}s` }
      : hidden
      ? { clipPath: 'inset(0 0 100% 0)' }
      : {};

  return { ref, phase, rise, rule, photo };
};
