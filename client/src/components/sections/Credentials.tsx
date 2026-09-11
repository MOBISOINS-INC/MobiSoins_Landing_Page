'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

// Replaces LogoCloud. The old marquee showed real insurer/regulator names
// (RAMQ, Desjardins, Sun Life…) behind invented placeholder SVG marks — a
// credibility problem, not just a design one. These four claims are things
// MobiSoins can actually stand behind.
const KEYS = ['cred1', 'cred2', 'cred3', 'cred4'] as const;

export const Credentials = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  return (
    <section className="bg-white border-y border-slate-200/70">
      <div className="container-custom">
        <div ref={ref} style={style} className="grid grid-cols-2 gap-x-5 sm:gap-x-0 lg:grid-cols-4">
          {KEYS.map((key, i) => (
            <div
              key={key}
              className="py-5 sm:py-8 lg:py-9 px-0 sm:px-7 lg:px-8 first:lg:pl-0 last:lg:pr-0 border-b lg:border-b-0 border-slate-100 sm:border-r last:sm:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r sm:border-slate-100 [&:nth-child(n+3)]:border-b-0 sm:[&:nth-child(n+3)]:border-b-0"
            >
              <h3 className="text-[13.5px] sm:text-[15.5px] font-medium tracking-[-0.01em] text-[#0a1f38]">
                {t(`v2.${key}Title`)}
              </h3>
              <p className="mt-1.5 text-[11.5px] sm:text-[13px] leading-relaxed text-[#5a5a6a]">
                {t(`v2.${key}Body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
