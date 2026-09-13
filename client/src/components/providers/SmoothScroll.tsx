'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

type Ctx = { lenis: Lenis | null };
const LenisContext = createContext<Ctx>({ lenis: null });

/** The Lenis instance, or null when smooth scroll is off (reduced motion, SSR). */
export const useLenis = () => useContext(LenisContext).lenis;

/**
 * Landing-only smooth scroll. The window stays the scroller (no wrapper/content
 * options) so `window.scrollY`, framer's `useScroll()` and `/#visit` hash links
 * keep working exactly as before; Lenis only reshapes the wheel input.
 * Elements that scroll internally must carry `data-lenis-prevent`.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const l = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      anchors: { offset: -24 },
    });
    setLenis(l);
    return () => {
      l.destroy();
      setLenis(null);
    };
  }, []);

  const value = useMemo(() => ({ lenis }), [lenis]);
  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
