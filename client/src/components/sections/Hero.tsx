'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { keepVideoPlaying } from '../../lib/keepVideoPlaying';
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

  // Playback must never need a tap on the video: keepVideoPlaying retries on
  // every resume signal, on the first gesture anywhere, and when playback
  // stalls. prefers-reduced-motion wins — we hold the first frame instead.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    return keepVideoPlaying(v, {
      reduceMotion: !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
      // Pick the cut here rather than with <source media> (browsers only honour
      // that at first load) or two elements (both files would download). It is
      // re-picked when the viewport crosses the breakpoint (rotation, resize).
      sourceQuery: MOBILE_QUERY,
      pickSource: () =>
        window.matchMedia?.(MOBILE_QUERY).matches
          ? { src: HERO_VIDEO_MOBILE, poster: HERO_POSTER_MOBILE }
          : { src: HERO_VIDEO, poster: HERO_POSTER },
    });
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
      >
        {/* Sources are in the server HTML so the phone starts fetching and
            autoplaying natively, before any JS has loaded. `media` is only
            honoured at first load; keepVideoPlaying re-picks on resize. */}
        <source src={HERO_VIDEO_MOBILE} type="video/mp4" media={MOBILE_QUERY} />
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <style>{'.hero-video::-webkit-media-controls,.hero-video::-webkit-media-controls-start-playback-button,.hero-video::-webkit-media-controls-overlay-play-button{display:none!important;-webkit-appearance:none;opacity:0;}.hero-video{object-position:50% 50%;}@media (max-width:640px){.hero-video{object-position:50% 42%;}}'}</style>

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
          <div
            className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-leaf-on-dark sm:mb-7 sm:text-[13px]"
            style={entrance(0)}
          >
            <span className="h-px w-5 bg-leaf-on-dark sm:w-7" aria-hidden="true" />
            {t('v2.heroBadge')}
          </div>

          <h1
            className="mb-5 font-display text-[2.9rem] font-light leading-none tracking-[-0.025em] sm:mb-7 sm:text-[clamp(3.4rem,5.4vw,5.25rem)] sm:leading-[0.98]"
            style={{
              ...entrance(0.08),
              color: '#ffffff',
              textShadow: '0 1px 2px rgba(2,9,20,0.5), 0 6px 34px rgba(2,9,20,0.7)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            {t('hero.title')}{' '}
            <em className="text-leaf-on-dark">{t('hero.titleHighlight')}.</em>
          </h1>

          <p
            className="mb-7 max-w-[470px] text-[16px] leading-[1.55] text-white/85 sm:mb-8 sm:text-[19px]"
            style={{ ...entrance(0.16), textShadow: '0 1px 12px rgba(2,9,20,0.6)' }}
          >
            <span className="sm:hidden">{t('hero.subtitleShort')}</span>
            <span className="hidden sm:inline">{t('hero.subtitle')}</span>
          </p>

          <div
            className="mb-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6"
            style={entrance(0.24)}
          >
            <a
              href="https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded bg-white px-7 text-[16px] font-semibold text-ink transition-colors hover:bg-leaf-on-dark hover:text-ink-deep"
            >
              {t('hero.bookNow')}
              <svg
                className="transition-transform duration-300 group-hover:translate-x-1"
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="hidden self-center border-b border-white/50 pb-[3px] text-[16px] font-medium text-white transition-colors hover:border-white sm:inline"
            >
              {t('v2.heroCtaSecondary')}
            </a>
          </div>

          {/* Store buttons */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={entrance(0.32)}
          >
            <AppStoreButton />
            <PlayStoreButton />
          </div>

        </div>
      </div>
    </section>
  );
};
