'use client';

import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { EYEBROW, H1, LEAD } from '../layout/PageShell';
import { jsonLd } from '../../lib/seo';

const QUESTIONS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const FAQ = () => {
  // Keyed by question text, not list position, so filtering can't open the wrong answer.
  const [openQ, setOpenQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  const faqs = QUESTIONS.map((n) => ({
    question: t(`faq.question${n}`),
    answer: t(`faq.answer${n}`),
  }));

  const q = searchQuery.trim().toLowerCase();
  const filteredFaqs = faqs.filter(
    (faq) => faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)
  );

  // All questions (not the search-filtered list) so search engines see the full FAQ.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <section id="faq" className="bg-white pt-10 pb-14 sm:pt-16 lg:pt-24 lg:pb-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }} />
      <div className="container-custom">
        <div ref={ref} style={style} className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left: intro + search (sticky on desktop) */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className={EYEBROW}>FAQ</span>
            <h1 className={`${H1} mt-3 lg:mt-5`}>{t('faq.title')}</h1>
            <p className={`${LEAD} mt-3 max-w-[420px] lg:mt-5`}>{t('faq.subtitle')}</p>
            <label className="relative mt-5 block lg:mt-8 max-w-[420px]">
              <span className="sr-only">{t('faq.searchPlaceholder')}</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder={t('faq.searchPlaceholder')}
                className="h-12 w-full rounded-[9px] border border-slate-200 bg-white pl-11 pr-4 text-[16px] lg:text-[14.5px] text-[#0a1f38] placeholder:text-slate-400 transition-colors focus:border-[#0a1f38] focus:outline-none focus:ring-1 focus:ring-[#0a1f38]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
          </div>

          {/* Right: accordion list */}
          <div className="border-t border-[#0a1f38]">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const open = openQ === faq.question;
                return (
                  <div key={faq.question} className="border-b border-slate-200/70">
                    <button
                      type="button"
                      aria-expanded={open}
                      className="flex w-full items-start justify-between gap-4 py-4 text-left sm:gap-6 sm:py-6"
                      onClick={() => setOpenQ(open ? null : faq.question)}
                    >
                      <span className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-[#0a1f38] sm:text-[18px]">
                        {faq.question}
                      </span>
                      <Plus
                        className={`mt-1 h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ${
                          open ? 'rotate-45' : ''
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[640px] pb-5 text-[14px] font-light leading-relaxed sm:pb-6 sm:text-[15px] text-[#5a5a6a]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="py-12 text-center text-[15px] text-slate-500">{t('faq.noResults')}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
