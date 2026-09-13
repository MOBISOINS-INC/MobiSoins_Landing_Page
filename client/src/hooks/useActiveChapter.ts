'use client';

import { useEffect, useState } from 'react';

const THRESHOLD = 0.35;

/**
 * Id of the chapter under the reader: the `[data-chapter]` section with the
 * largest intersection inside a root trimmed to the upper half of the viewport
 * (10% off the top, 40% off the bottom). Feeds the header's route word.
 * Server and first client render return 'hero'.
 */
export function useActiveChapter(): string {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const io = new IntersectionObserver(
      (entries) => {
        // Only entries at/above the threshold are "entering"; an entry that just
        // dropped below it is still `isIntersecting` and must not win back the word.
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < THRESHOLD) continue;
          if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
        }
        const id = best ? (best.target as HTMLElement).dataset.chapter : undefined;
        if (id) setActive(id);
      },
      { threshold: [THRESHOLD], rootMargin: '-10% 0px -40% 0px' }
    );

    const observed = new Set<Element>();
    const observe = () => {
      document.querySelectorAll<HTMLElement>('[data-chapter]').forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        io.observe(el);
      });
    };
    observe();

    // Chapters below the fold are `next/dynamic` and mount later: pick them up
    // as they land, plus a safety pass after a second and once the page has loaded.
    const mo = new MutationObserver(observe);
    mo.observe(document.querySelector('main') ?? document.body, { childList: true, subtree: true });
    const timer = window.setTimeout(observe, 1000);
    window.addEventListener('load', observe);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(timer);
      window.removeEventListener('load', observe);
    };
  }, []);

  return active;
}
