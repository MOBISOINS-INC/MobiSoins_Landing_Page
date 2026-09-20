'use client';

import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { ArrowRight, DISPLAY, Eyebrow } from '../ui/editorial';

const NURSE_FORM =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

// Nurse recruitment — previously a dark card tucked under the services list.
export const NurseRecruit = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section id="for-nurses" className="bg-paper py-16 lg:py-[120px]">
      <div className="container-custom">
        <div
          ref={ref}
          style={style}
          className="grid grid-cols-1 items-center gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,640px)] lg:gap-x-24"
        >
          <div className="order-2 flex flex-col items-stretch gap-6 lg:order-none lg:items-start lg:gap-7">
            <Eyebrow>{t('v2.nursesEyebrow')}</Eyebrow>
            <h2 className={`${DISPLAY} text-[34px] leading-[1.1] lg:text-[50px] lg:leading-[1.08]`}>
              {t('v2.nursesPitch')}
            </h2>
            <a
              href={NURSE_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[54px] items-center justify-center gap-3 rounded border border-ink px-[26px] text-[16px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {t('v2.nursesCta')}
              <ArrowRight />
            </a>
          </div>
          <Image
            src="/about/story.jpg"
            alt={t('v2.nursesPhotoAlt')}
            width={2000}
            height={1493}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="order-1 h-60 w-full rounded object-cover object-[50%_30%] lg:order-none lg:h-[440px]"
          />
        </div>
      </div>
    </section>
  );
};
