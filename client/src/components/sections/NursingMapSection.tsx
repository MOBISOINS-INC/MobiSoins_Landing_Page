'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { Eyebrow } from '../ui/editorial';

// Full-bleed navy band. The right side shows the three text messages a patient
// actually receives during a visit (confirmed, left, arriving), set as a timed
// thread, instead of a mocked map/app UI, which read as fake.
export const NursingMapSection = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  const messages = [
    { time: t('v2.dispatchSms1Time'), text: t('v2.dispatchSms1'), last: false },
    { time: t('v2.dispatchSms2Time'), text: t('v2.dispatchSms2'), last: false },
    { time: t('v2.dispatchSms3Time'), text: t('v2.dispatchSms3'), last: true },
  ];

  return (
    <section id="dispatch" className="bg-ink py-[72px] text-white lg:py-32">
      <div className="container-custom">
        <div
          ref={ref}
          style={style}
          className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-x-[120px]"
        >
          <div className="flex flex-col gap-5 lg:gap-7">
            <Eyebrow onDark>{t('v2.dispatchEyebrow')}</Eyebrow>
            <h2 className="font-display text-[44px] font-light leading-[1.02] tracking-[-0.025em] text-white lg:text-[76px] lg:leading-none">
              {t('v2.dispatchTitle1')}
              <br />
              <em className="text-leaf-on-dark">{t('v2.dispatchTitle2')}</em>
            </h2>
            <p className="max-w-[500px] text-[16px] leading-relaxed text-white/85 lg:text-[19px]">
              {t('v2.dispatchBody')}
            </p>
            <p className="max-w-[500px] border-t border-white/20 pt-5 text-[13px] text-leaf-on-dark lg:text-[14px]">
              {t('v2.dispatchNote')}
            </p>
          </div>

          <div>
            <ol className="m-0 flex list-none flex-col gap-5 p-0 lg:gap-8" aria-label={t('v2.dispatchThreadLabel')}>
              {messages.map((m) => (
                <li
                  key={m.time}
                  className="flex flex-col items-start gap-2 lg:grid lg:grid-cols-[84px_minmax(0,1fr)] lg:gap-x-6"
                >
                  <time className="text-[12px] font-semibold tabular-nums text-leaf-on-dark lg:pt-4 lg:text-[14px]">
                    {m.time}
                  </time>
                  <p
                    className={`m-0 rounded-[14px] rounded-bl-[2px] px-4 py-3.5 text-[15px] leading-normal lg:px-[18px] lg:py-4 lg:text-[16px] ${
                      m.last
                        ? 'justify-self-start bg-leaf-on-dark font-medium text-ink-deep'
                        : 'mr-7 bg-white text-ink lg:mr-0'
                    }`}
                  >
                    {m.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[12px] text-white/60 lg:mt-7 lg:pl-[108px]">{t('v2.dispatchThreadLabel')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
