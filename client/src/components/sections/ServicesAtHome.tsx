'use client';

import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { ArrowRight, DISPLAY, Eyebrow } from '../ui/editorial';

// There are no real patient quotes yet, and inventing them for a healthcare
// service is not an option — so this slot answers the question visitors actually
// arrive with ("can they do the thing I need?") using the service copy that
// already exists under `about.*`. Set as a numbered, ruled index: not cards.
const SERVICES = [1, 2, 3, 4, 5, 6, 7] as const;

export const ServicesAtHome = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section id="services-at-home" className="bg-paper pb-16 pt-[72px] lg:pb-[120px] lg:pt-[136px]">
      <div className="container-custom">
        <div ref={ref} style={style} className="flex flex-col gap-8 lg:gap-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:gap-x-20">
            <div className="flex flex-col gap-4 lg:gap-6">
              <Eyebrow>{t('v2.servicesEyebrow')}</Eyebrow>
              <h2 className={`${DISPLAY} max-w-[680px] text-[40px] leading-[1.05] lg:text-[60px] lg:leading-[1.04]`}>
                {t('v2.servicesTitle')}
              </h2>
            </div>
            <p className="order-last text-[13px] leading-relaxed text-ink-soft lg:order-none lg:text-[15px]">
              {t('v2.servicesNote')}
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-ink lg:grid-cols-2 lg:gap-x-20">
            {SERVICES.map((n) => (
              <div
                key={n}
                className="grid grid-cols-[36px_minmax(0,1fr)] gap-x-3 border-b border-rule py-5 lg:grid-cols-[48px_minmax(0,1fr)] lg:gap-x-4 lg:py-7"
              >
                <div className="pt-1 text-[12px] font-semibold text-leaf-text lg:pt-[5px] lg:text-[13px]">
                  {String(n).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-sans text-[18px] font-semibold tracking-normal text-ink lg:text-[21px]">
                    {t(`about.service${n}Title`)}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-ink-soft lg:mt-2 lg:text-[15px]">
                    {t(`about.service${n}Desc`)}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex items-center py-6 lg:py-7">
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center gap-2.5 border-b border-leaf pb-1 text-[16px] font-semibold text-ink transition-colors hover:border-ink"
              >
                {t('v2.servicesMore')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
