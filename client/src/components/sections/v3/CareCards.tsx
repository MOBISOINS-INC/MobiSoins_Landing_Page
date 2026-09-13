'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useDragScroll } from '../../../hooks/useDragScroll';
import { useReveal } from '../../../hooks/useReveal';
import { CARD_TEXT, CARD_TITLE, Chapter, MICRO, PILL_OUTLINE } from './Chapter';

// The six `about.service{n}` entries; the corporate 7th lives behind "See all care".
const CARDS = [1, 2, 3, 4, 5, 6] as const;

/* --- One care card: index + hashtags on top, title + clamped description
   pinned to the bottom. Each card reveals on its own so the row staggers. --- */
function CareCard({ n, index }: { n: (typeof CARDS)[number]; index: number }) {
  const { t } = useLanguage();
  const reveal = useReveal<HTMLLIElement>(0.06 * index, 'fsRise');

  return (
    <li
      ref={reveal.ref}
      style={reveal.style}
      className="shrink-0 snap-start w-[min(78vw,20rem)] md:w-[21rem] h-[17rem] md:h-[18rem] rounded-3xl border border-white/12 bg-ink-panel/45 p-6 flex flex-col justify-between transition-[border-color,background-color,transform] duration-[400ms] ease-fs md:hover:-translate-y-1 md:hover:border-sage/55 md:hover:bg-ink-panel/60"
    >
      <div className="flex justify-between items-start gap-4">
        {/* MICRO lifted to /60: the index is the card's anchor */}
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/60">N°0{n}</span>
        <span className={`${MICRO} text-right`}>{t(`v3.card${n}Tag`)}</span>
      </div>
      <div>
        <h3 className={CARD_TITLE}>{t(`about.service${n}Title`)}</h3>
        <p className={`${CARD_TEXT} mt-2 line-clamp-3`}>{t(`about.service${n}Desc`)}</p>
      </div>
    </li>
  );
}

/* --- Chapter 3 "Des soins chez vous.": a full-bleed drag row of care cards.
   Mouse drags via useDragScroll; touch and horizontal wheel stay native
   (`data-lenis-prevent` keeps Lenis off the row). --- */
export function CareCards() {
  const { t } = useLanguage();
  const scroller = useRef<HTMLUListElement>(null);
  const { scrolled } = useDragScroll(scroller);

  return (
    <Chapter
      id="care"
      titleKeys={['v3.careTitle1', 'v3.careTitle2']}
      captionKey="v2.servicesEyebrow"
      className="py-[7vh] md:py-[4vh] overflow-x-clip"
    >
      {/* Row breaks out of container-custom to viewport width; the section clips the overshoot.
          First card and badge sit on the container's left edge (1.5rem gutter, 1400px max). */}
      <div className="relative mt-[4vh] w-screen ml-[calc(50%-50vw)]">
        <div
          aria-hidden="true"
          className={`hidden md:[@media(hover:hover)]:grid absolute z-10 -top-20 left-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] h-20 w-20 rounded-full fs-panel place-items-center animate-spin-slow transition-opacity duration-300 ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* MICRO at 9px / .3em */}
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/45">{t('v3.dragBadge')}</span>
        </div>
        <ul
          ref={scroller}
          // No `data-lenis-prevent` here: lenis.css gives prevented elements
          // `overscroll-behavior: contain`, which stops a vertical swipe/wheel
          // that starts on a card from ever reaching the page. Lenis already
          // ignores deltaY === 0 gestures, so horizontal wheel stays native.
          className="fs-noscrollbar flex gap-4 overflow-x-auto snap-x snap-proximity scroll-pl-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] overscroll-x-contain pl-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] pr-6 pb-2 text-left cursor-grab active:cursor-grabbing select-none"
        >
          {CARDS.map((n, i) => (
            <CareCard key={n} n={n} index={i} />
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
        <p className="text-[12px] font-light text-white/45 text-center max-w-[40rem]">{t('v2.servicesNote')}</p>
        <Link href="/services" className={PILL_OUTLINE}>
          {t('v3.servicesAll')}
        </Link>
      </div>
    </Chapter>
  );
}
