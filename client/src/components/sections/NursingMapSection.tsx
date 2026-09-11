'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

// The section was named "map" but never had one — it was a photo with a
// hardcoded "8 min" chip. It is now an inset dark card on the white page,
// with an actual route. Inset rather than full-bleed so the page keeps one
// continuous white ground and gains no extra seam.
export const NursingMapSection = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  const rows = [
    [t('v2.dispatchRow1'), t('v2.dispatchRow1Value')],
    [t('v2.dispatchRow2'), t('v2.dispatchRow2Value')],
    [t('v2.dispatchRow3'), t('v2.dispatchRow3Value')],
  ];

  return (
    <section id="dispatch" className="bg-white pb-20 lg:pb-24">
      <div className="container-custom">
        <div
          ref={ref}
          style={style}
          className="grid grid-cols-1 items-center gap-5 rounded-[18px] bg-[#0a1f38] p-5 text-white sm:gap-10 sm:rounded-[22px] sm:p-7 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:p-11"
        >
          <div>
            <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.14em] text-[#98B690]">
              {t('v2.dispatchEyebrow')}
            </span>
            <h2 className="mt-2 sm:mt-3 text-[22px] sm:text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-white lg:text-[36px]">
              {t('v2.dispatchTitle1')}
              <br />
              {t('v2.dispatchTitle2')}
            </h2>
            <p className="mt-2.5 sm:mt-4 max-w-[400px] text-[13.5px] sm:text-[15.5px] font-light leading-relaxed text-[#a8bacd]">
              {t('v2.dispatchBody')}
            </p>
            <div className="mt-4 sm:mt-7 flex flex-col">
              {rows.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex justify-between border-t border-white/10 py-2 sm:py-3 text-[12.5px] sm:text-[14px] ${
                    i === rows.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <span>{label}</span>
                  <span className="text-[#a8bacd]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[190px] overflow-hidden rounded-[12px] bg-[#10304f] sm:h-[300px] sm:rounded-[14px] lg:h-[330px]">
            <svg
              viewBox="0 0 700 330"
              preserveAspectRatio="xMidYMid slice"
              className="h-full w-full"
              aria-hidden="true"
            >
              <rect width="700" height="330" fill="#10304f" />
              <g stroke="#17405f" strokeWidth="16" fill="none">
                <path d="M-20 74 L240 88 L330 206 L740 194" />
                <path d="M-20 264 L200 272 L420 248 L740 260" />
                <path d="M120 -20 L140 116 L120 350" />
                <path d="M480 -20 L500 148 L470 350" />
                <path d="M620 -20 L636 166 L620 350" />
              </g>
              <path
                d="M140 116 L240 88 L330 206 L470 192 L500 148"
                stroke="#98B690"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="9 8"
                fill="none"
              />
              <circle cx="140" cy="116" r="9" fill="#98B690" />
              <circle cx="500" cy="148" r="14" fill="#0a1f38" stroke="#98B690" strokeWidth="4" />
              <circle
                cx="500"
                cy="148"
                r="32"
                fill="none"
                stroke="#98B690"
                strokeOpacity="0.28"
                strokeWidth="2"
              />
            </svg>

            <div className="absolute left-3 top-3 rounded-[10px] border border-white/10 bg-[#0a1f38]/90 px-2.5 py-1.5 sm:left-4 sm:top-4 sm:px-3.5 sm:py-2.5">
              <div className="text-[9px] sm:text-[10.5px] uppercase tracking-[0.12em] text-[#98B690]">
                {t('v2.dispatchEtaLabel')}
              </div>
              <div className="mt-0.5 text-[17px] sm:text-[24px] font-medium tracking-[-0.03em]">
                {t('v2.dispatchEta')}
              </div>
            </div>

            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-[10px] border border-white/10 bg-[#0a1f38]/90 px-3 py-2 sm:inset-x-4 sm:bottom-4 sm:px-4 sm:py-3">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-[#1b3d5e]" />
                <div className="text-[10.5px] sm:text-[11.5px] text-[#a8bacd]">{t('v2.dispatchNurseStatus')}</div>
              </div>
              <div className="rounded-lg border border-white/20 px-2.5 py-1 text-[11px] sm:px-3 sm:py-1.5 sm:text-[12.5px]">
                {t('v2.dispatchMessage')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
