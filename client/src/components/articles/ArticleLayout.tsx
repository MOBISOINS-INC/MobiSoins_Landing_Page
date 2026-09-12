'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PageShell, EYEBROW, BODY, FRAME } from '../layout/PageShell';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

export interface ArticleSection {
  title: string;
  content: string[];
  list?: string[];
}

export interface ArticleSource {
  label: string;
  url: string;
}

export interface ArticleData {
  slug: string;
  tag: string;
  date: string;
  title: string;
  subtitle: string;
  readTime: string;
  image: string;
  fallbackImage?: string;
  sections: ArticleSection[];
  sources?: ArticleSource[];
  conclusion: {
    title: string;
    content: string[];
  };
}

interface ArticleLayoutProps {
  article: {
    FR: ArticleData;
    EN: ArticleData;
  };
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({ article }) => {
  const { language } = useLanguage();
  const data = article[language];
  const { ref, style } = useReveal();

  return (
    <PageShell>
      <article className="bg-white pt-10 pb-20 sm:pt-12 lg:pt-16 lg:pb-28">
        <div ref={ref} style={style} className="container-custom">
          {/* Title block */}
          <header className="mx-auto max-w-[820px]">
            <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500">
              <span className="text-[#4e6645]">{data.tag}</span>
              <span aria-hidden="true">·</span>
              <span>{data.date}</span>
              <span aria-hidden="true">·</span>
              <span>{data.readTime}</span>
            </div>
            <h1 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0a1f38] sm:text-[42px] lg:text-[52px]">
              {data.title}
            </h1>
            <p className="mt-6 text-[17px] font-light leading-relaxed text-[#5a5a6a] sm:text-[19px]">
              {data.subtitle}
            </p>
          </header>

          {/* Hero image */}
          <div className={`${FRAME} mx-auto mt-10 aspect-[16/9] max-w-[1100px] sm:mt-12`}>
            <img
              src={data.image}
              alt={data.title}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => { if (data.fallbackImage) (e.target as HTMLImageElement).src = data.fallbackImage; }}
            />
          </div>

          {/* Body */}
          <div className="mx-auto mt-12 max-w-[720px] sm:mt-16">
            {data.sections.map((section) => (
              <section key={section.title} className="mb-10">
                <h2 className="text-[22px] font-medium leading-snug tracking-[-0.02em] text-[#0a1f38] sm:text-[24px]">
                  {section.title}
                </h2>
                {section.content.map((paragraph, j) => (
                  <p key={j} className={`${BODY} mt-4`}>
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-slate-400">
                    {section.list.map((item) => (
                      <li key={item} className={BODY}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <section className="rounded-[22px] bg-[#0a1f38] p-7 text-white sm:p-9">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#98B690]">
                {data.conclusion.title}
              </span>
              {data.conclusion.content.map((paragraph, j) => (
                <p
                  key={j}
                  className="mt-4 text-[17px] font-normal leading-[1.45] tracking-[-0.01em] text-white sm:text-[19px]"
                >
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Sources */}
            {data.sources && data.sources.length > 0 && (
              <section className="mt-12 border-t border-slate-200/70 pt-8">
                <h2 className={EYEBROW}>Sources</h2>
                <ul className="mt-4 space-y-2">
                  {data.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-words text-[14px] text-[#0a1f38] underline decoration-slate-300 underline-offset-4 transition-colors hover:decoration-[#0a1f38]"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Footer / copyright */}
            <div className="mt-12 border-t border-slate-200/70 pt-6">
              <p className="text-[12.5px] text-slate-500">
                &copy; 2026 MobiSoins &mdash; {language === 'FR' ? 'Tous droits réservés.' : 'All rights reserved.'}
              </p>
              <p className="mt-1 text-[12.5px] text-slate-500">
                {language === 'FR'
                  ? 'Ce contenu est protégé. Toute reproduction, distribution ou utilisation sans autorisation est interdite.'
                  : 'This content is protected. Any reproduction, distribution, or use without permission is prohibited.'}
              </p>
            </div>

            <Link
              href="/articles"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[#0a1f38] transition-colors hover:text-[#4e6645]"
            >
              <ArrowLeft className="h-4 w-4" />
              {language === 'FR' ? 'Tous les articles' : 'All articles'}
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
};
