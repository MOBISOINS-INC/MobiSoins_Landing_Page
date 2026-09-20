'use client';

import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { DISPLAY, Eyebrow } from '../ui/editorial';

// Who the service is for, carried by a real photograph at full scale with a
// caption — the one tinted band on the page.
export const Patients = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section id="patients" className="bg-leaf-tint pb-16 lg:py-[120px]">
      <div className="mx-auto max-w-[1400px] lg:px-6">
        <div
          ref={ref}
          style={style}
          className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-[minmax(0,680px)_minmax(0,1fr)] lg:gap-x-24"
        >
          <figure className="m-0 flex flex-col gap-3.5">
            <Image
              src="/about/hero.jpg"
              alt={t('v2.patientsPhotoAlt')}
              width={2000}
              height={1116}
              sizes="(min-width: 1024px) 680px, 100vw"
              className="h-[300px] w-full object-cover lg:h-[520px] lg:rounded"
            />
            <figcaption className="flex items-center gap-2.5 px-4 text-[13px] text-leaf-text sm:px-6 lg:px-0">
              <span className="h-px w-6 bg-leaf" aria-hidden="true" />
              {t('v2.patientsCaption')}
            </figcaption>
          </figure>
          <div className="flex flex-col gap-[18px] px-4 sm:px-6 lg:gap-7 lg:px-0">
            <Eyebrow>{t('v2.patientsEyebrow')}</Eyebrow>
            <h2 className={`${DISPLAY} text-[34px] leading-[1.1] lg:text-[50px] lg:leading-[1.08]`}>
              {t('v2.patientsTitle1')} {t('v2.patientsTitle2')} <em>{t('v2.patientsTitle3')}</em>
            </h2>
            <p className="text-[16px] leading-[1.65] text-leaf-text lg:text-[18px]">{t('v2.patientsBody')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
