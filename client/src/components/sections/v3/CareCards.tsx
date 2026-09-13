'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useMounted } from '../../../hooks/useMounted';
import { useReveal } from '../../../hooks/useReveal';
import { WAITLIST_URL } from '../../layout/v3/navData';
import { Arrow, CARD_TEXT, CARD_TITLE, Chapter, MICRO, PILL_OUTLINE, PILL_WHITE } from './Chapter';

// The six `about.service{n}` entries; the corporate 7th lives behind "See all care".
const CARDS = [1, 2, 3, 4, 5, 6] as const;

// +1: the row slides left -> right as the page scrolls down (and back on the way
// up), per the owner's brief. -1 flips it to the more common right -> left.
const SLIDE_DIRECTION = 1;

const MD_QUERY = '(min-width: 768px)';

/* --- One care card: index + hashtags on top, title + clamped description
   pinned to the bottom. Each card reveals on its own so the row staggers. --- */
function CareCard({ n, index }: { n: (typeof CARDS)[number]; index: number }) {
  const { t } = useLanguage();
  const reveal = useReveal<HTMLLIElement>(0.06 * index, 'fsRise');

  return (
    <li
      ref={reveal.ref}
      style={reveal.style}
      className="shrink-0 snap-start w-[min(78vw,20rem)] md:w-[21rem] h-[16rem] md:h-[17rem] rounded-3xl border border-white/20 bg-ink-panel/75 p-6 flex flex-col justify-between transition-[border-color,background-color,transform] duration-[400ms] ease-fs md:hover:-translate-y-1 md:hover:border-sage/70 md:hover:bg-ink-panel/90"
    >
      <div className="flex justify-between items-start gap-4">
        {/* MICRO lifted to /75: the index is the card's anchor */}
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/75">N°0{n}</span>
        <span className={`${MICRO} text-right`}>{t(`v3.card${n}Tag`)}</span>
      </div>
      <div>
        <h3 className={CARD_TITLE}>{t(`about.service${n}Title`)}</h3>
        <p className={`${CARD_TEXT} mt-2 line-clamp-3`}>{t(`about.service${n}Desc`)}</p>
      </div>
    </li>
  );
}

/* --- Chapter 3 "Des soins chez vous.": a full-bleed row of care cards driven
   by the page scroll on md+ — scrolling down slides the row one way, scrolling
   up brings it back — so it needs no drag affordance. Below md the row is a
   plain native swipe (a scroll-linked 2000px of travel is far too fast on a
   phone). The section clips the overshoot; body is overflow-x: clip. --- */
export function CareCards() {
  const { t } = useLanguage();
  const mounted = useMounted();
  const row = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [isMd, setIsMd] = useState(false);
  // How far the row overflows the viewport; the slide covers exactly that.
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia(MD_QUERY);
    const update = () => setIsMd(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const measure = () => {
      const el = track.current;
      if (!el) return;
      // scrollWidth reports the full content width even with overflow: visible.
      setTravel(Math.max(0, el.scrollWidth - el.clientWidth));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [isMd]);

  // Progress 0 -> 1 while the row crosses the viewport bottom -> top.
  const { scrollYProgress: p } = useScroll({ target: row, offset: ['start end', 'end start'] });
  const x = useTransform(p, [0, 1], SLIDE_DIRECTION > 0 ? [-travel, 0] : [0, -travel]);

  // Hooks above always run; the slide is only applied on md+ after mount, so
  // SSR/no-JS shows the row at rest, first card on the container's left edge.
  const active = mounted && isMd;

  return (
    <Chapter
      id="care"
      titleKeys={['v3.careTitle1', 'v3.careTitle2']}
      captionKey="v2.servicesEyebrow"
      className="py-[6vh] md:py-[3vh] overflow-x-clip"
    >
      {/* Row breaks out of container-custom to viewport width; the first card
          sits on the container's left edge (1.5rem gutter, 1400px max). */}
      <div ref={row} className="relative mt-[3vh] w-screen ml-[calc(50%-50vw)]">
        <motion.ul
          ref={track}
          style={active ? { x } : undefined}
          // No `data-lenis-prevent` here: lenis.css gives prevented elements
          // `overscroll-behavior: contain`, which stops a vertical swipe that
          // starts on a card from ever reaching the page.
          className="fs-noscrollbar flex gap-4 overflow-x-auto md:overflow-x-visible snap-x snap-proximity md:snap-none overscroll-x-contain scroll-pl-6 pl-6 md:pl-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] pr-6 pb-2 text-left md:will-change-transform"
        >
          {CARDS.map((n, i) => (
            <CareCard key={n} n={n} index={i} />
          ))}
        </motion.ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 px-6">
        <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className={PILL_WHITE}>
          {t('hero.bookNow')}
          <Arrow />
        </a>
        <Link href="/services" className={PILL_OUTLINE}>
          {t('v3.servicesAll')}
        </Link>
      </div>
      <p className="mt-4 text-[12px] text-white/60 text-center max-w-[40rem] mx-auto px-6">{t('v2.servicesNote')}</p>
    </Chapter>
  );
}
