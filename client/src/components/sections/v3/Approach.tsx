'use client';

import { useLanguage } from '../../../contexts/LanguageContext';
import { useReveal } from '../../../hooks/useReveal';
import { BODY, Chapter, Columns } from './Chapter';

/* --- Chapter 1: the fiftyseven "A Good Story" beat. Scroll hint, display
   title and caption come from the Chapter shell; below them two calm columns
   of body copy. Nothing here is scrubbed — entrances only. --- */
export function Approach() {
  const { t } = useLanguage();
  const col1 = useReveal<HTMLDivElement>(0.25, 'fsRise');
  const col2 = useReveal<HTMLDivElement>(0.33, 'fsRise');

  return (
    <Chapter
      id="approach"
      hint
      titleKeys={['v3.approachTitle1', 'v3.approachTitle2']}
      captionKey="v3.approachLabel"
      className="py-[7vh] md:py-[4vh]"
    >
      <Columns className="mt-[5vh]">
        <div ref={col1.ref} style={col1.style} className={`${BODY} space-y-5`}>
          <p>{t('about.missionLead')}</p>
          <p>{t('v3.approachP2')}</p>
        </div>
        <div ref={col2.ref} style={col2.style} className={`${BODY} space-y-5`}>
          <p>{t('v2.dispatchBody')}</p>
          <p>{t('v3.approachP3')}</p>
        </div>
      </Columns>
    </Chapter>
  );
}
