'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { ArrowRight } from '../ui/editorial';

const WAITLIST_FORM =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

export const Newsletter = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section id="waitlist" className="bg-ink py-12 text-white lg:py-32">
      <div className="container-custom">
        <div
          ref={ref}
          style={style}
          className="grid grid-cols-1 gap-y-4 text-center lg:text-left lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end lg:gap-x-[120px]"
        >
          <div className="flex flex-col gap-6 lg:gap-8">
            <h2 className="font-display text-[34px] font-light leading-[1.02] tracking-[-0.025em] text-white lg:text-[88px] lg:leading-[0.98] lg:tracking-[-0.03em]">
              {t('v2.ctaTitle1')} <em className="text-leaf-on-dark">{t('v2.ctaTitle2')}</em>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-3 lg:items-stretch lg:gap-4">
            <p className="text-[14px] leading-[1.5] text-white/85 lg:text-[18px]">{t('v2.ctaBody')}</p>
            <a
              href={WAITLIST_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2.5 rounded bg-white px-5 text-[14.5px] lg:h-14 lg:gap-3 lg:px-7 lg:text-[16px] font-semibold text-ink transition-colors hover:bg-leaf-on-dark hover:text-ink-deep"
            >
              {t('v2.ctaButton')}
              <ArrowRight />
            </a>
            <p className="text-[12px] text-white/65 lg:text-[13px]">{t('v2.ctaFinePrint')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
