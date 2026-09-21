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
          className="grid grid-cols-2 border-b border-rule lg:grid-cols-4"
        >
          {KEYS.map((key, i) => (
            <div
              key={key}
              className="border-t border-rule py-6 [&:nth-child(-n+2)]:border-t-0 odd:pr-4 even:border-l even:pl-4 sm:odd:pr-7 sm:even:pl-7 lg:border-l lg:border-t-0 lg:px-8 lg:py-11 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="pt-[3px] text-[12px] font-semibold tracking-[0.14em] text-leaf-text">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="mt-2 font-sans text-[16px] font-semibold tracking-normal text-ink lg:mt-2.5 lg:text-[17px]">
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
