'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

// Replaces the patients/testimonials section. There are no real patient quotes
// yet, and inventing them for a healthcare service is not an option — so this
// slot answers the question visitors actually arrive with ("can they do the
// thing I need?") using the service copy that already exists under `about.*`.
const SERVICES = [1, 2, 3, 4, 5, 6] as const;

export const ServicesAtHome = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section id="services-at-home" className="bg-white pb-32">
      <div className="container-custom">
        <div ref={ref} style={style}>
          <div className="max-w-[640px]">
            <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500">
              {t('v2.servicesEyebrow')}
            </span>
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0a1f38] lg:text-[44px]">
              {t('v2.servicesTitle')}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-x-3 gap-y-6 sm:gap-x-[30px] sm:gap-y-10">
            {SERVICES.map((n) => (
              <div key={n} className="border-t border-[#0a1f38] pt-3 sm:pt-5">
                <h3 className="text-[12.5px] leading-tight sm:text-[18px] font-medium tracking-[-0.02em] text-[#0a1f38]">
                  {t(`about.service${n}Title`)}
                </h3>
                <p className="mt-1.5 sm:mt-2.5 text-[10.5px] sm:text-[14.5px] font-light leading-relaxed text-[#5a5a6a]">
                  {t(`about.service${n}Desc`)}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-[13px] text-slate-500">{t('v2.servicesNote')}</p>

          {/* Nurse recruitment — carried over from the section this replaces */}
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0a1f38] p-8 sm:flex-row sm:items-center lg:p-10">
            <div>
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#98B690]">
                {t('v2.nursesEyebrow')}
              </span>
              <p className="mt-3.5 max-w-[520px] text-[21px] font-normal leading-[1.35] tracking-[-0.03em] text-white lg:text-[24px]">
                {t('v2.nursesPitch')}
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-[9px] border border-white/25 px-6 py-3 text-[14px] text-white transition-colors hover:bg-white/10"
            >
              {t('v2.nursesCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
