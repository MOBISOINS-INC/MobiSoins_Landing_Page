'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { PlayStoreButton } from '../ui/play-store-button';
import { AppStoreButton } from '../ui/app-store-button';

// Hero background video. The previous photo carousel (HERO_SLIDES) lives in
// `client/.archive/hero-images/Hero.slides.tsx.bak`; the images themselves are
// still in `public/nurses/` if we ever want to switch back.
// Two different clips: the landscape master for sm+ screens, and a dedicated
// native-vertical clip (`hero-mobile.mp4`, 720x1280 H.264, ~12s) for phones.
// The previous 528x1080 crop of the landscape footage is kept in
// `client/.archive/video/`.
const HERO_VIDEO = '/video/hero.mp4';
const HERO_POSTER = '/video/hero-poster.jpg';
const HERO_VIDEO_MOBILE = '/video/hero-mobile.mp4';
const HERO_POSTER_MOBILE = '/video/hero-mobile-poster.jpg';
// Matches the `sm` breakpoint used for the mobile-only scrims below.
const MOBILE_QUERY = '(max-width: 640px)';

// Framer Motion drives the mount entrance off animation frames, which a
// background tab does not deliver — the hero would freeze part-way (often at
// opacity 0, i.e. no headline at all) and never recover. Opening the site in a
// background tab (cmd-click, session restore) hit this.
//
// The fix is not "animate later": it is that TEXT VISIBILITY MUST NOT DEPEND ON
// AN ANIMATION RUNNING. If we mounted while hidden, we skip the entrance and
// snap straight to the final state — there is nothing to watch anyway, and
// nothing that can stall.
// Hero entrance, deliberately CSS rather than Framer Motion.
//
// Framer drives animation off requestAnimationFrame, which a background tab
// never delivers: opening the site in a hidden tab (cmd-click, session restore)
// froze the hero at opacity 0 — headline and subtitle simply absent, forever.
// A CSS animation runs on the document timeline instead, so it completes while
// hidden; and because the RESTING style is fully opaque, text is visible even if
// the animation never runs at all. `backwards` holds the from-state during the
// stagger delay so nothing flashes in first.
const entrance = (delay: number): React.CSSProperties => ({
  animation: 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) backwards',
  animationDelay: `${delay}s`,
});

export const Hero = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay is best-effort: some browsers (and background tabs) refuse or defer
  // it, so we nudge play() on mount and whenever the tab becomes visible again.
  // prefers-reduced-motion wins — we hold the first frame instead of looping.
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const start = () => {
      const v = videoRef.current;
      if (!v) return;
      // Pick the cut here rather than with <source media> (browsers only honour
      // that at first load) or two elements (both files would download).
      const mobile = window.matchMedia?.(MOBILE_QUERY).matches;
      const src = mobile ? HERO_VIDEO_MOBILE : HERO_VIDEO;
      if (!v.src.endsWith(src)) {
        v.poster = mobile ? HERO_POSTER_MOBILE : HERO_POSTER;
        v.src = src;
      }
      if (reduce) {
        v.pause();
        return;
      }
      // play() rejects when the browser blocks autoplay — the poster then stays
      // up, which is an acceptable fallback, so swallow it rather than crash.
      v.play().catch(() => {});
    };
    start();
    const onVisible = () => {
      if (document.visibilityState === 'visible') start();
    };
    document.addEventListener('visibilitychange', onVisible);
    // Re-pick the cut when the viewport crosses the breakpoint (rotation, resize).
    const mq = window.matchMedia?.(MOBILE_QUERY);
    mq?.addEventListener('change', start);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      mq?.removeEventListener('change', start);
    };
  }, []);

  return (
    <section
      aria-label="Infirmière MobiSoins arrivant à domicile"
      className="relative w-full min-h-screen flex items-end overflow-hidden"
      style={{ backgroundColor: '#031226' }}
    >
      {/* Background video — muted/looping, plays inline on iOS. The poster shows
          while it buffers so the hero is never a blank navy box. */}
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 w-full h-full object-cover"
        poster={HERO_POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <style>{'.hero-video{object-position:50% 50%;}@media (max-width:640px){.hero-video{object-position:50% 42%;}}'}</style>

      {/* Global cool-down: a light overall tint keeps the footage from washing out
          the white type without dulling the whole frame. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(3,10,22,0.14)' }}
      />
      {/* Elliptical scrim anchored bottom-left, under the copy block. Radial (not a
          hard-edged panel) so it reads as a lighting falloff, never as a box. */}
      <div
        className="absolute inset-0 pointer-events-none sm:hidden"
        style={{
          background:
            'radial-gradient(120% 95% at 0% 100%, rgba(2,9,20,0.92) 0%, rgba(2,9,20,0.78) 26%, rgba(2,9,20,0.48) 48%, rgba(2,9,20,0.18) 66%, rgba(2,9,20,0) 82%)',
        }}
      />
      {/* Desktop scrim — anchored mid-left, under the centred copy */}
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          background:
            'radial-gradient(105% 85% at 0% 55%, rgba(2,9,20,0.7) 0%, rgba(2,9,20,0.45) 30%, rgba(2,9,20,0.16) 56%, rgba(2,9,20,0) 78%)',
        }}
      />
      {/* Mobile bottom fade — dissolves the video into the navy the mobile page still uses */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45%] pointer-events-none sm:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,18,38,0) 0%, rgba(3,18,38,0.35) 40%, rgba(3,18,38,0.8) 70%, #031226 92%, #031226 100%)',
        }}
      />
      {/* Desktop: the video dissolves into the white page below — no seam to look at.
          Mobile keeps the navy fade above, so this is sm+ only. */}
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0) 84%, rgba(255,255,255,0.08) 90%, rgba(255,255,255,0.30) 95%, rgba(255,255,255,0.72) 98.5%, #ffffff 100%)',
        }}
      />
      {/* Mobile only: gentle bottom-up gradient so the bottom-anchored text sits on a
          calm base (transparent up top keeps the nurse's face clear). */}
      <div
        className="absolute inset-x-0 bottom-0 h-[62%] pointer-events-none sm:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,18,38,0) 0%, rgba(3,18,38,0.25) 45%, rgba(3,18,38,0.6) 78%, rgba(3,18,38,0.85) 100%)',
        }}
      />
      {/* Mobile only: small top scrim so the logo/menu seat cleanly on a bright sky */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none sm:hidden"
        style={{ background: 'linear-gradient(180deg, rgba(3,18,38,0.5) 0%, rgba(3,18,38,0) 100%)' }}
      />

      <div className="container-custom w-full relative z-10 pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-[40rem]">
          <h1
            className="text-[2.15rem] sm:text-[clamp(2.4rem,3.6vw,3.5rem)] font-light leading-[1.05] tracking-[-0.035em] mb-7 md:mb-9"
            style={{
              ...entrance(0),
              fontWeight: 300,
              color: 'rgba(255,255,255,0.92)',
              textShadow: '0 1px 2px rgba(2,9,20,0.6), 0 6px 34px rgba(2,9,20,0.75)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            {t('hero.title')}<br />
            <span>
              {t('hero.titleHighlight')}
            </span>
          </h1>


          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
            style={entrance(0.2)}
          >
            <a
              href="https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-navy group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold cursor-pointer"
             
            >
              <span className="relative">{t('hero.bookNow')}</span>
              <svg
                className="relative transition-transform duration-300 group-hover:translate-x-1"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Store buttons */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={entrance(0.35)}
          >
            <AppStoreButton />
            <PlayStoreButton />
          </div>

        </div>
      </div>
    </section>
  );
};
