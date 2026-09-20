'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

// Replaces LogoCloud. The old marquee showed real insurer/regulator names
// (RAMQ, Desjardins, Sun Life…) behind invented placeholder SVG marks — a
// credibility problem, not just a design one. These four claims are things
// MobiSoins can actually stand behind. Drawn as a ruled ledger: no icons.
const KEYS = ['cred1', 'cred2', 'cred3', 'cred4'] as const;

export const Credentials = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section className="bg-paper">
      <div className="container-custom">
        <div
          ref={ref}
          style={style}
          className="grid grid-cols-1 border-b border-rule sm:grid-cols-2 lg:grid-cols-4"
        >
          {KEYS.map((key, i) => (
            <div
              key={key}
              className="grid grid-cols-[36px_minmax(0,1fr)] gap-x-3 border-t border-rule py-6 first:border-t-0 sm:px-7 sm:[&:nth-child(-n+2)]:border-t-0 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:border-l lg:block lg:border-l lg:border-t-0 lg:px-8 lg:py-11 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0 lg:[&:nth-child(odd)]:pl-8 lg:first:[&:nth-child(odd)]:pl-0"
            >
              <div className="pt-[3px] text-[12px] font-semibold tracking-[0.14em] text-leaf-text">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-sans text-[16px] font-semibold tracking-normal text-ink lg:mt-2.5 lg:text-[17px]">
                  {t(`v2.${key}Title`)}
                </h3>
                <p className="mt-1 text-[14px] leading-normal text-ink-soft lg:mt-2.5 lg:text-[15px]">
                  {t(`v2.${key}Body`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
