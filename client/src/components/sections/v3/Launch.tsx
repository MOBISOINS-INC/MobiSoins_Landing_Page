'use client';

import { useLanguage } from '../../../contexts/LanguageContext';
import { useReveal } from '../../../hooks/useReveal';
import { RECRUIT_URL, WAITLIST_URL } from '../../layout/v3/navData';
import { BODY, Caption, Chapter, PILL_OUTLINE, PILL_WHITE } from './Chapter';

const CREDENTIALS = [1, 2, 3, 4] as const;

/* --- One trust credential: sage dot + title + one-line body. Its own
   component so each row owns its reveal hook (no hooks inside a map). --- */
function Credential({ n, index }: { n: number; index: number }) {
  const { t } = useLanguage();
  const reveal = useReveal<HTMLLIElement>(0.3 + 0.06 * index, 'fsRise');

  return (
    <li ref={reveal.ref} style={reveal.style} className="flex gap-3">
      <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
      <div>
        <p className="text-[14px] font-medium text-white">{t(`v2.cred${n}Title`)}</p>
        <p className="text-[13px] font-normal leading-[1.5] text-white/78 mt-1">{t(`v2.cred${n}Body`)}</p>
      </div>
    </li>
  );
}

/* --- Chapter 4: the waitlist ask. Title + caption from the Chapter shell,
   then one-line body, white pill, fine print, the four credentials and the
   nurses' side door. Entrances only, nothing scrubbed. --- */
export function Launch() {
  const { t } = useLanguage();
  const body = useReveal<HTMLParagraphElement>(0.2, 'fsRise');
  const cta = useReveal<HTMLDivElement>(0.28, 'fsRise');
  const fine = useReveal<HTMLParagraphElement>(0.32, 'fsRise');
  const nurses = useReveal<HTMLDivElement>(0.5, 'fsRise');

  return (
    <Chapter
      id="launch"
      titleKeys={['v2.ctaTitle1', 'v2.ctaTitle2']}
      captionKey="hero.waitlistTitle"
      className="py-[6vh] md:py-[3vh] text-center"
    >
      <p ref={body.ref} style={body.style} className={`${BODY} max-w-[30rem] mx-auto mt-4`}>
        {t('v2.ctaBody')}
      </p>

      <div ref={cta.ref} style={cta.style} className="mt-6">
        <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className={PILL_WHITE}>
          {t('v2.ctaButton')}
          {/* Same arrow as the hero CTA, one step smaller. */}
          <svg
            aria-hidden="true"
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      {/* MICRO's font/size/colour, but sentence case and looser tracking. Composed
          explicitly: `normal-case` and a second `tracking-[…]` cannot override
          MICRO's `uppercase` / `tracking-[0.22em]` — Tailwind emits those earlier
          in the sheet, so the MICRO values would win. */}
      <p ref={fine.ref} style={fine.style} className="font-mono text-[0.625rem] tracking-[0.12em] text-white/60 mt-3">
        {t('v2.ctaFinePrint')}
      </p>

      <ul className="mt-[3vh] mx-auto max-w-[44rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 text-left">
        {CREDENTIALS.map((n, i) => (
          <Credential key={n} n={n} index={i} />
        ))}
      </ul>

      <div ref={nurses.ref} style={nurses.style} className="mt-[3vh] flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-5">
        <Caption>{t('v2.nursesEyebrow')}</Caption>
        <p className={`${BODY} md:text-[0.875rem]`}>{t('v2.nursesPitch')}</p>
        <a href={RECRUIT_URL} target="_blank" rel="noopener noreferrer" className={PILL_OUTLINE}>
          {t('v2.nursesCta')}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </Chapter>
  );
}
