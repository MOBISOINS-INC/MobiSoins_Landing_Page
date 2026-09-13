'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useActiveChapter } from '../../../hooks/useActiveChapter';
import { useMounted } from '../../../hooks/useMounted';
import { cn } from '../../../lib/utils';
import { useLenis } from '../../providers/SmoothScroll';
import { Caption, MENU_ROW, MICRO, PILL_WHITE, ROUTE_WORD } from '../../sections/v3/Chapter';
import { BrandLogo } from '../../ui/BrandLogo';
import { useViewportHeight } from './FloatingBar';
import { ARTICLES, CHAPTERS, NAV_LINKS, WAITLIST_URL } from './navData';

const LANGS = ['FR', 'EN'] as const;
const SHEET_EASE = [0.06, 0, 0, 1] as const;

/* --- FR / EN segmented switch (spec LANG_SWITCH) --- */
function LangSwitch() {
  const { t, language, setLanguage } = useLanguage();
  return (
    <div role="group" aria-label={t('header.language')} className="flex rounded-full bg-white/10 p-0.5">
      {LANGS.map((lang) => (
        <button
          key={lang}
          type="button"
          aria-pressed={language === lang}
          onClick={() => setLanguage(lang)}
          className={`rounded-full px-3 py-1.5 font-mono text-[11px] transition-colors duration-200 ${
            language === lang ? 'bg-white text-ink-panel' : 'text-white/70 hover:text-white'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

const Arrow = () => (
  <svg
    aria-hidden="true"
    className="transition-transform duration-300 group-hover:translate-x-0.5"
    width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
  </svg>
);

/* --- Landing chrome: two floating pills (brand + route word + hamburger on the
   left, FR/EN + waitlist on the right) and a menu sheet that drops from the left
   pill. One look everywhere — the pill is its own ground — so nothing hides on
   scroll; only the right-pill CTA fades in once the hero's own CTA is gone. --- */
export function FloatingHeader() {
  const { t } = useLanguage();
  const lenis = useLenis();
  const pathname = usePathname();
  const mounted = useMounted();
  const active = useActiveChapter();
  const vh = useViewportHeight();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // The CTA is not laid out at all over the hero (an empty capsule otherwise);
  // it enters the pill just before its opacity ramp (60-90vh) begins.
  const [ctaInLayout, setCtaInLayout] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();
  const ctaOpacity = useTransform(scrollY, [0.6 * vh, 0.9 * vh], [0, 1]);

  // Past the hero once its store buttons have scrolled away (same rule as Header.tsx).
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 120);
      setCtaInLayout(window.scrollY > window.innerHeight * 0.55);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Route change closes the sheet.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // While open: freeze Lenis, close on Escape / click outside. On close: resume
  // Lenis and hand focus back to the hamburger.
  useEffect(() => {
    if (!menuOpen) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
      lenis?.start();
      toggleRef.current?.focus();
    };
  }, [menuOpen, lenis]);

  const close = () => setMenuOpen(false);
  const routeKey = CHAPTERS.find((c) => c.id === active)?.labelKey ?? 'header.home';

  return (
    <>
      {/* LEFT pill: brand | route word | hamburger */}
      <header className="fixed z-50 left-4 right-4 top-4 md:right-auto md:left-[clamp(1rem,4.17vw,3.75rem)] md:top-[clamp(1rem,4.17vw,3.75rem)]">
        <div className="fs-panel flex h-12 items-center justify-between gap-4 rounded-full pl-4 pr-1 md:h-14 md:min-w-[22rem] md:gap-8 md:pl-5 md:pr-2">
          <Link href="/" className="flex shrink-0 items-center">
            <BrandLogo className="h-6 md:h-7" />
          </Link>

          {/* Keyed remount replays the fade when the chapter under the reader changes. */}
          <span key={active} className={`${ROUTE_WORD} hidden sm:block animate-fade-in`}>
            {t(routeKey).toLowerCase()}
          </span>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="fs-menu"
            aria-label={menuOpen ? t('v3.close') : t('v3.menu')}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors duration-200 hover:bg-white/10"
          >
            <span aria-hidden="true" className="relative block h-[7px] w-[18px]">
              <span
                className={`absolute inset-x-0 top-0 block h-px bg-white transition-transform duration-200 ${
                  menuOpen ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 block h-px bg-white transition-transform duration-200 ${
                  menuOpen ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* RIGHT pill (md+): FR/EN | waitlist CTA, the CTA fading in over 60–90vh */}
      <div className="fixed z-50 hidden h-14 items-center gap-2 rounded-full fs-panel px-2 md:flex md:right-[clamp(1rem,4.17vw,3.75rem)] md:top-[clamp(1rem,4.17vw,3.75rem)]">
        <LangSwitch />
        <motion.a
          href={WAITLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(PILL_WHITE, 'group px-5 py-2.5 text-[13px]', !ctaInLayout && 'hidden')}
          style={
            mounted
              ? { opacity: ctaOpacity, pointerEvents: scrolled ? 'auto' : 'none' }
              : { opacity: 0, pointerEvents: 'none' }
          }
        >
          {t('header.joinWaitlist')}
          <Arrow />
        </motion.a>
      </div>

      {/* MENU sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="fs-menu"
            id="fs-menu"
            ref={menuRef}
            role="dialog"
            aria-label={t('v3.menu')}
            data-lenis-prevent
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.32, ease: SHEET_EASE } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.2, ease: SHEET_EASE } }}
            className="fixed z-50 left-4 right-4 top-[4.5rem] max-h-[calc(100svh_-_7rem)] overflow-y-auto rounded-3xl fs-panel bg-ink/95 p-5 md:right-auto md:left-[clamp(1rem,4.17vw,3.75rem)] md:top-[calc(clamp(1rem,4.17vw,3.75rem)_+_4rem)] md:w-[min(28rem,calc(100vw_-_2rem))] md:p-6"
          >
            <Caption>{t('v3.navigation')}</Caption>
            <ul className="mt-2">
              {NAV_LINKS.map((link, i) => {
                const rowClass = `${MENU_ROW} flex items-baseline gap-4 border-b border-white/8 py-2.5 transition-colors duration-200 hover:text-sage`;
                const index = (
                  <span className={cn(MICRO, 'w-6 shrink-0 text-white/35')}>{String(i + 1).padStart(2, '0')}</span>
                );
                return (
                  <li key={link.key}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={close} className={rowClass}>
                        {index}
                        <span className="flex-1">{t(link.key)}</span>
                        <span aria-hidden="true" className="text-[0.8em] text-white/45">↗</span>
                      </a>
                    ) : (
                      <Link href={link.href} onClick={close} className={rowClass}>
                        {index}
                        <span className="flex-1">{t(link.key)}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 border-t border-white/10 pt-5">
              <Caption>{t('blog.title')}</Caption>
              <ul className="-mx-2 mt-2">
                {ARTICLES.map((a) => (
                  <li key={a.href}>
                    <Link
                      href={a.href}
                      onClick={close}
                      className="flex items-center gap-3 rounded-xl p-2 transition-colors duration-200 hover:bg-white/5"
                    >
                      <span className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/5">
                        <img
                          src={a.img}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = a.fallback;
                          }}
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={cn(MICRO, 'block text-sage')}>{t(a.tagKey)}</span>
                        <span className="mt-0.5 line-clamp-2 block text-[13px] text-white/90">{t(a.titleKey)}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
              <div className="flex items-center gap-3">
                <span className={MICRO}>{t('header.language')}</span>
                <LangSwitch />
              </div>
              <a
                href={WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className={cn(PILL_WHITE, 'group whitespace-nowrap px-4 py-2.5 text-[13px] md:hidden')}
              >
                {t('header.joinWaitlist')}
                <Arrow />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
