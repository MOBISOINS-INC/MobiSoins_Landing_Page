'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

const WAITLIST_FORM =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

export const Newsletter = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section id="waitlist" className="border-t border-slate-200/70 bg-[#f7f9fa] py-20 lg:py-24">
      <div className="container-custom">
        <div
          ref={ref}
          style={style}
          className="mx-auto flex max-w-[660px] flex-col items-center gap-4 text-center"
        >
          <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#0a1f38] lg:text-[44px]">
            {t('v2.ctaTitle1')}
            <br />
            {t('v2.ctaTitle2')}
          </h2>
          <p className="max-w-[460px] text-[17px] font-light leading-relaxed text-[#5a5a6a]">
            {t('v2.ctaBody')}
          </p>
          <a
            href={WAITLIST_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-[10px] px-7 py-4 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(180deg, #0a4a85 0%, #003366 55%, #00264d 100%)',
              boxShadow:
                '0 10px 30px rgba(0,51,102,0.45), inset 0 1px 0 rgba(255,255,255,0.18)',
            }}
          >
            {t('v2.ctaButton')}
          </a>
          <p className="mt-0.5 text-[12.5px] text-slate-500">{t('v2.ctaFinePrint')}</p>
        </div>
      </div>
    </section>
  );
};
