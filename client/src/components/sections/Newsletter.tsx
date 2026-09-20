'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { ArrowRight } from '../ui/editorial';
import { PulseLine } from '../ui/PulseLine';

const WAITLIST_FORM =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

export const Newsletter = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section id="waitlist" className="bg-ink py-[72px] text-white lg:py-32">
      <div className="container-custom">
        <div
          ref={ref}
          style={style}
          className="grid grid-cols-1 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end lg:gap-x-[120px]"
        >
          <div className="flex flex-col gap-6 lg:gap-8">
            <PulseLine className="h-9 w-[200px] text-leaf-on-dark lg:h-11 lg:w-80" />
            <h2 className="font-display text-[52px] font-light leading-none tracking-[-0.025em] text-white lg:text-[88px] lg:leading-[0.98] lg:tracking-[-0.03em]">
              {t('v2.ctaTitle1')} <em className="text-leaf-on-dark">{t('v2.ctaTitle2')}</em>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[16px] leading-[1.55] text-white/85 lg:text-[18px]">{t('v2.ctaBody')}</p>
            <a
              href={WAITLIST_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 rounded bg-white px-7 text-[16px] font-semibold text-ink transition-colors hover:bg-leaf-on-dark hover:text-ink-deep"
            >
              {t('v2.ctaButton')}
              <ArrowRight />
            </a>
            <p className="text-[13px] text-white/65">{t('v2.ctaFinePrint')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
