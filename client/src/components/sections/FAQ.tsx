'use client';

import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { EYEBROW, H1, LEAD } from '../layout/PageShell';

const QUESTIONS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  return (
    <section id="faq" className="pt-12 pb-20 sm:pt-16 lg:pt-24 lg:pb-28">
      <div className="container-custom">
        <div ref={ref} style={style} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left: intro + search (sticky on desktop) */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className={EYEBROW}>FAQ</span>
            <h1 className={`${H1} mt-5`}>{t('faq.title')}</h1>
            <p className={`${LEAD} mt-5 max-w-[420px]`}>{t('faq.subtitle')}</p>
            <label className="relative mt-8 block max-w-[420px]">
              <span className="sr-only">{t('faq.searchPlaceholder')}</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
              <input
                type="search"
                placeholder={t('faq.searchPlaceholder')}
                className="h-12 w-full rounded-xl border border-white/15 bg-white/5 pl-11 pr-4 text-[14.5px] text-white placeholder:text-white/40 transition-colors focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
          </div>

          {/* Right: accordion list */}
          <div className="border-t border-white/30">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const open = openIndex === index;
                return (
                  <div key={faq.question} className="border-b border-white/12">
                    <button
                      type="button"
                      aria-expanded={open}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left sm:py-6"
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      <span className="text-[16px] font-medium leading-snug tracking-[-0.01em] text-white sm:text-[18px]">
                        {faq.question}
                      </span>
                      <Plus
                        className={`mt-1 h-4 w-4 shrink-0 text-white/60 transition-transform duration-300 ${
                          open ? 'rotate-45' : ''
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[640px] pb-6 text-[15px] font-light leading-relaxed text-white/78">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="py-12 text-center text-[15px] text-white/60">{t('faq.noResults')}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
