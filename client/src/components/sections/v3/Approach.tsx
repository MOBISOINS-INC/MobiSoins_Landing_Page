'use client';

import Link from 'next/link';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useReveal } from '../../../hooks/useReveal';
import { WAITLIST_URL } from '../../layout/v3/navData';
import { Arrow, BODY, Chapter, Columns, PILL_OUTLINE, PILL_WHITE } from './Chapter';

/* --- Chapter 1: the fiftyseven "A Good Story" beat, kept short. Scroll hint,
   display title and caption come from the Chapter shell; below them one
   paragraph per column and the two actions a visitor can take today. Nothing
   here is scrubbed — entrances only. --- */
export function Approach() {
  const { t } = useLanguage();
  const col1 = useReveal<HTMLParagraphElement>(0.25, 'fsRise');
  const col2 = useReveal<HTMLParagraphElement>(0.33, 'fsRise');
  const ctas = useReveal<HTMLDivElement>(0.4, 'fsRise');

  return (
    <Chapter
      id="approach"
      hint
      titleKeys={['v3.approachTitle1', 'v3.approachTitle2']}
      captionKey="v3.approachLabel"
      className="py-[6vh] md:py-[3vh]"
    >
      <Columns className="mt-[4vh]">
        <p ref={col1.ref} style={col1.style} className={BODY}>
          {t('about.missionLead')}
        </p>
        <p ref={col2.ref} style={col2.style} className={BODY}>
          {t('v2.dispatchBody')}
        </p>
      </Columns>

      <div ref={ctas.ref} style={ctas.style} className="mt-[4vh] flex flex-wrap items-center justify-center gap-3">
        <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className={PILL_WHITE}>
          {t('hero.bookNow')}
          <Arrow />
        </a>
        <Link href="/services" className={PILL_OUTLINE}>
          {t('v3.servicesAll')}
        </Link>
      </div>
    </Chapter>
  );
}
