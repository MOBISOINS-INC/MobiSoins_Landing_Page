'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export type RevealAnimation = 'slideUp' | 'fsRise' | 'fsClipRise';

// Keyframes live in globals.css; keep the timing next to the name so a caller
// cannot pick an animation that has no definition.
const ANIMATIONS: Record<RevealAnimation, string> = {
  slideUp: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards',
  fsRise: 'fsRise 0.9s cubic-bezier(0.06, 0, 0, 1) backwards',
  // Must sit on an inner element inside an `overflow-hidden` block.
  fsClipRise: 'fsClipRise 1s cubic-bezier(0.06, 0, 0, 1) backwards',
};

/**
 * Scroll entrance that cannot strand content invisible.
 *
 * Framer Motion's `whileInView` animates off requestAnimationFrame, which a
 * background tab never delivers — a page opened in a hidden tab (cmd-click,
 * session restore) froze mid-entrance and stayed that way, leaving whole
 * sections at opacity 0 permanently.
 *
 * Here the RESTING style is fully visible and the animation is additive: the
 * element is readable if the observer never fires, if the animation never runs,
 * or if JS fails outright. CSS animations also run on the document timeline, so
 * they complete while the tab is hidden rather than freezing.
 *
 * `prefers-reduced-motion` is already neutralised globally in globals.css.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>(
  delay = 0,
  animation: RevealAnimation = 'slideUp'
) => {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    // No IntersectionObserver (or no layout yet): just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const style: CSSProperties = shown
    ? {
        animation: ANIMATIONS[animation],
        animationDelay: `${delay}s`,
      }
    : {};

  return { ref, style };
};
