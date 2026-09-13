'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useMounted } from '../../../hooks/useMounted';
import { cn } from '../../../lib/utils';
import { useLenis } from '../../providers/SmoothScroll';
import { MICRO, PILL_OUTLINE } from '../../sections/v3/Chapter';

/* --- Viewport height in px for scroll ranges written in vh. The fallback is
   only ever read before mount, when no scrubbed style is applied anyway. --- */
export function useViewportHeight(fallback = 900): number {
  const [vh, setVh] = useState(fallback);

  useEffect(() => {
    const update = () => setVh(window.innerHeight);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return vh;
}

/* --- "↑ HAUT": Lenis tween when smooth scroll is on, native smooth scroll
   otherwise (reduced motion, SSR). Also used by the Colophon's mobile row. --- */
export function BackToTop({ className }: { className?: string }) {
  const { t } = useLanguage();
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2, easing: (x) => 1 - Math.pow(1 - x, 4) });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(PILL_OUTLINE, MICRO, 'px-3 py-1.5 tracking-[0.25em] text-white/80', className)}
    >
      ↑ {t('v3.backToTop')}
    </button>
  );
}

/* --- Desktop-only bottom bar: copyright | made-in | back to top. Slides in
   between 30–45vh so it never sits over the hero's store buttons; at page end
   it visually becomes the Colophon's bottom edge (the Colophon reserves the
   room). Hidden on the server and the first client render. --- */
export function FloatingBar() {
  const { t } = useLanguage();
  const mounted = useMounted();
  const vh = useViewportHeight();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0.3 * vh, 0.45 * vh], ['140%', '0%']);
  const opacity = useTransform(scrollY, [0.3 * vh, 0.45 * vh], [0, 1]);

  return (
    <motion.div
      className="fixed z-40 inset-x-[clamp(1rem,4.17vw,3.75rem)] bottom-[3vh] hidden h-12 md:flex items-center justify-between rounded-full fs-panel px-5"
      style={mounted ? { y, opacity } : { transform: 'translateY(140%)', opacity: 0 }}
    >
      <p className={MICRO}>
        © {new Date().getFullYear()} MobiSoins · {t('footer.allRightsReserved')}
      </p>
      <p className={cn(MICRO, 'hidden lg:flex items-center gap-2')}>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />
        {t('footer.madeIn')}
      </p>
      <BackToTop />
    </motion.div>
  );
}
