'use client';

import React from 'react';
import { PageShell, EYEBROW, H1 } from '../layout/PageShell';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const UPDATED_LABEL = { FR: 'Dernière mise à jour', EN: 'Last updated' } as const;

/** Legal page shell: the policies hand in their language's content object. */
export const LegalLayout: React.FC<{ content: LegalContent }> = ({ content }) => {
  const { language } = useLanguage();
  const { ref, style } = useReveal();
  return (
    <PageShell labelKey="footer.legal">
      <div className="pt-12 pb-20 sm:pt-16 lg:pt-24 lg:pb-28">
        <div ref={ref} style={style} className="container-custom">
          <div className="mx-auto max-w-[760px]">
            <span className={EYEBROW}>
              {UPDATED_LABEL[language]}{language === 'FR' ? ' : ' : ': '}{content.lastUpdated}
            </span>
            <h1 className={`${H1} mt-5`}>{content.title}</h1>
            <div className="mt-12 border-t border-white/30 pt-10 text-[15.5px] font-normal leading-relaxed text-white/80">
              {content.sections.map((section) => (
                <section key={section.heading} className="mb-10">
                  <h2 className="mb-3 text-[20px] font-medium tracking-[-0.02em] text-white">{section.heading}</h2>
                  {section.paragraphs?.map((p) => (
                    <p key={p} className="mb-4">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mb-4 list-disc pl-6 space-y-1.5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};
