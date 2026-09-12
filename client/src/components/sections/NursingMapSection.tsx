'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

// Inset dark card on the white page. The right side shows the three text
// messages a patient actually receives during a visit (confirmed, left,
// arriving) instead of a mocked map/app UI, which read as fake.
export const NursingMapSection = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  const messages = [
    { time: t('v2.dispatchSms1Time'), text: t('v2.dispatchSms1'), last: false },
    { time: t('v2.dispatchSms2Time'), text: t('v2.dispatchSms2'), last: false },
    { time: t('v2.dispatchSms3Time'), text: t('v2.dispatchSms3'), last: true },
  ];

  return (
    <section id="dispatch" className="bg-white pb-12 sm:pb-20 lg:pb-24">
      <div className="container-custom">
        <div
          ref={ref}
          style={style}
          className="grid grid-cols-1 items-center gap-4 rounded-[16px] bg-[#0a1f38] p-4 text-white sm:gap-10 sm:rounded-[22px] sm:p-7 lg:grid-cols-2 lg:gap-16 lg:px-13 lg:py-11"
        >
          <div>
            <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.14em] text-[#98B690]">
              {t('v2.dispatchEyebrow')}
            </span>
            <h2 className="mt-1.5 sm:mt-3 text-[22px] sm:text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-white lg:text-[36px]">
              {t('v2.dispatchTitle1')}
              <br />
              {t('v2.dispatchTitle2')}
            </h2>
            <p className="mt-2 sm:mt-4 max-w-[400px] text-[13px] sm:text-[15.5px] font-light leading-relaxed text-[#a8bacd]">
              {t('v2.dispatchBody')}
            </p>
            <div className="mt-3 sm:mt-7 flex items-center gap-2 text-[11.5px] sm:text-[13px] text-[#a8bacd]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#98B690]" aria-hidden="true" />
              <span>{t('v2.dispatchNote')}</span>
            </div>
          </div>

          <ol className="flex flex-col gap-2.5 sm:gap-[18px]" aria-label={t('v2.dispatchThreadLabel')}>
            {messages.map((m) => (
              <li key={m.time} className="flex flex-col items-start gap-1 sm:gap-1.5">
                <time className="pl-1 text-[10px] sm:text-[11px] tracking-[0.06em] text-[#7F90AB]">{m.time}</time>
                <p
                  className={`m-0 max-w-[420px] rounded-[16px] rounded-bl-[4px] px-3 py-2 text-[13px] leading-[1.4] sm:rounded-[18px] sm:px-4 sm:py-3 sm:text-[15px] sm:leading-[1.45] ${
                    m.last
                      ? 'bg-[#98B690] font-medium text-[#0a1f38]'
                      : 'bg-[#16324f] text-[#e6edf5]'
                  }`}
                >
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
