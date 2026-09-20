'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { PageShell, FRAME } from '../layout/PageShell';
import { ArrowRight, Eyebrow } from '../ui/editorial';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { relatedArticles } from '../../data/articleIndex';

const WAITLIST_URL =
  'https://docs.google.com/forms/d/1TaBNJ9M7Ks6LW5_Vfyqx5DodEPQZbo06bxX8PvJFLiw/viewform';

export interface ArticleLink {
  label: string;
  href: string;
}

export interface ArticleSection {
  title: string;
  content: string[];
  list?: string[];
  /** Large serif pull quote shown after the paragraphs. */
  quote?: string;
  /** Tinted aside — a tip, a caveat, or "how MobiSoins helps". */
  callout?: { label: string; text: string };
  /** Internal links to the matching service pages. */
  links?: ArticleLink[];
}

export interface ArticleSource {
  label: string;
  url: string;
}

export interface ArticleFact {
  value: string;
  label: string;
}

export interface ArticleFaq {
  q: string;
  a: string;
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
  /** "In brief" bullets under the hero image. */
  takeaways?: string[];
  /** Big-number strip. Every value must be backed by an entry in `sources`. */
  keyFacts?: ArticleFact[];
  sections: ArticleSection[];
  faq?: ArticleFaq[];
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

const COPY = {
  FR: {
    brief: 'En bref',
    toc: 'Dans cet article',
    faq: 'Questions fréquentes',
    related: 'À lire ensuite',
    all: 'Tous les articles',
    read: 'de lecture',
    services: 'Services liés',
    ctaEyebrow: 'Liste d’attente ouverte',
    ctaTitle: 'Des soins infirmiers, directement chez vous.',
    ctaBody:
      'MobiSoins prépare ses premières visites au Québec. Inscrivez-vous : vous serez parmi les premiers à réserver une infirmière membre de l’OIIQ à domicile.',
    ctaButton: 'Rejoindre la liste d’attente',
    disclaimer:
      'Cet article est fourni à titre informatif et ne remplace pas l’avis d’un professionnel de la santé. En cas d’urgence, composez le 911 ; pour une question de santé non urgente, Info-Santé 811.',
    rights: 'Tous droits réservés.',
    protectedNote:
      'Ce contenu est protégé. Toute reproduction, distribution ou utilisation sans autorisation est interdite.',
  },
  EN: {
    brief: 'In brief',
    toc: 'In this article',
    faq: 'Frequently asked questions',
    related: 'Read next',
    all: 'All articles',
    read: 'read',
    services: 'Related services',
    ctaEyebrow: 'Waitlist now open',
    ctaTitle: 'Nursing care, delivered to your door.',
    ctaBody:
      'MobiSoins is preparing its first visits in Quebec. Sign up and be among the first to book an OIIQ-registered nurse at home.',
    ctaButton: 'Join the waitlist',
    disclaimer:
      'This article is for information only and does not replace advice from a health professional. In an emergency, call 911; for a non-urgent health question, call Info-Santé 811.',
    rights: 'All rights reserved.',
    protectedNote:
      'This content is protected. Any reproduction, distribution, or use without permission is prohibited.',
  },
} as const;

const sectionId = (i: number) => `section-${i + 1}`;

/** Which section heading is currently in the reading zone — drives the TOC. */
const useActiveSection = (count: number) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-20% 0px -65% 0px' },
    );
    for (let i = 0; i < count; i++) {
      const el = document.getElementById(sectionId(i));
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [count]);

  return active;
};

const WaitlistCta = ({ copy }: { copy: (typeof COPY)['FR' | 'EN'] }) => (
  <aside className="rounded-2xl bg-ink-deep p-7 sm:p-10">
    <Eyebrow onDark>{copy.ctaEyebrow}</Eyebrow>
    <p className="mt-4 font-display text-[28px] font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-[36px]">
      {copy.ctaTitle}
    </p>
    <p className="mt-4 max-w-[520px] text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">{copy.ctaBody}</p>
    <a
      href={WAITLIST_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex h-12 items-center gap-3 rounded bg-white px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-leaf-on-dark hover:text-ink-deep"
    >
      {copy.ctaButton}
      <ArrowRight />
    </a>
  </aside>
);

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({ article }) => {
  const { language } = useLanguage();
  const data = article[language];
  const copy = COPY[language];
  const { ref, style } = useReveal();
  const { scrollYProgress } = useScroll();
  const active = useActiveSection(data.sections.length);
  const related = relatedArticles(data.slug);

  const faqJsonLd = data.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null;

  return (
    <PageShell>
      {/* Reading progress — pinned to the very top of the viewport, above the
          header, so it never floats over the text when the header slides away */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-leaf"
      />

      <article className="bg-white pt-10 pb-20 sm:pt-12 lg:pt-16 lg:pb-28">
        <div ref={ref} style={style} className="container-custom">
          {/* Title block */}
          <header className="mx-auto max-w-[860px] text-center">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-leaf-text"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {copy.all}
            </Link>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <span className="rounded-full bg-leaf-tint px-3 py-1 text-leaf-text">{data.tag}</span>
              <span>{data.date}</span>
              <span aria-hidden="true">·</span>
              <span>
                {data.readTime} {copy.read}
              </span>
            </div>
            <h1 className="mt-6 font-display text-[38px] font-light leading-[1.04] tracking-[-0.025em] text-ink sm:text-[52px] lg:text-[68px]">
              {data.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.6] text-ink-soft sm:text-[19px]">
              {data.subtitle}
            </p>
          </header>

          {/* Hero image */}
          <div className={`${FRAME} mx-auto mt-10 aspect-[16/9] max-w-[1180px] sm:mt-14 lg:aspect-[21/9]`}>
            <img
              src={data.image}
              alt={data.title}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => { if (data.fallbackImage) (e.target as HTMLImageElement).src = data.fallbackImage; }}
            />
          </div>

          {/* Key facts */}
          {data.keyFacts && data.keyFacts.length > 0 && (
            <dl className="mx-auto mt-10 grid max-w-[1180px] grid-cols-1 divide-y divide-rule border-y border-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {data.keyFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse gap-2 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                  <dt className="text-[14px] leading-[1.5] text-ink-soft">{fact.label}</dt>
                  <dd className="font-display text-[44px] font-light leading-none tracking-[-0.02em] text-ink lg:text-[56px]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {/* TOC rail + body */}
          <div className="mx-auto mt-12 max-w-[1180px] sm:mt-16 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[260px_minmax(0,720px)]">
            <nav aria-label={copy.toc} className="hidden lg:block">
              <div className="sticky top-32">
                <Eyebrow>{copy.toc}</Eyebrow>
                <ol className="mt-5 border-l border-rule">
                  {data.sections.map((section, i) => (
                    <li key={section.title}>
                      <a
                        href={`#${sectionId(i)}`}
                        aria-current={active === i ? 'true' : undefined}
                        className={`-ml-px block border-l-2 py-2 pl-4 text-[13.5px] leading-[1.4] transition-colors ${
                          active === i
                            ? 'border-leaf font-medium text-ink'
                            : 'border-transparent text-ink-soft hover:text-ink'
                        }`}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <div className="min-w-0">
              {/* In brief */}
              {data.takeaways && data.takeaways.length > 0 && (
                <aside className="mb-14 rounded-2xl bg-leaf-tint p-7 sm:p-9">
                  <Eyebrow>{copy.brief}</Eyebrow>
                  <ul className="mt-5 space-y-3">
                    {data.takeaways.map((item) => (
                      <li key={item} className="flex gap-3 text-[16px] leading-[1.6] text-ink">
                        <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-leaf" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </aside>
              )}

              {data.sections.map((section, i) => (
                <React.Fragment key={section.title}>
                  <section
                    id={sectionId(i)}
                    data-index={i}
                    className={`mb-14 scroll-mt-32 ${i === 0 ? '' : 'border-t border-rule pt-8'}`}
                  >
                    <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-leaf-text">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-3 font-display text-[28px] font-light leading-[1.12] tracking-[-0.02em] text-ink sm:text-[36px]">
                      {section.title}
                    </h2>
                    {section.content.map((paragraph, j) => (
                      <p key={j} className="mt-5 text-[16.5px] leading-[1.75] text-ink-soft sm:text-[17.5px]">
                        {paragraph}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="mt-6 space-y-3">
                        {section.list.map((item) => (
                          <li key={item} className="flex gap-3 text-[16.5px] leading-[1.65] text-ink-soft sm:text-[17.5px]">
                            <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-leaf" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.quote && (
                      <blockquote className="my-10 border-l-2 border-leaf pl-6 font-display text-[24px] font-light italic leading-[1.3] tracking-[-0.01em] text-ink sm:pl-8 sm:text-[30px]">
                        {section.quote}
                      </blockquote>
                    )}
                    {section.callout && (
                      <aside className="mt-8 rounded-2xl border border-rule bg-panel p-6 sm:p-7">
                        <Eyebrow>{section.callout.label}</Eyebrow>
                        <p className="mt-3 text-[15.5px] leading-[1.65] text-ink sm:text-[16.5px]">
                          {section.callout.text}
                        </p>
                      </aside>
                    )}
                    {section.links && section.links.length > 0 && (
                      <div className="mt-7">
                        <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                          {copy.services}
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="inline-flex items-center gap-1.5 rounded-full border border-rule px-4 py-2 text-[14px] font-medium text-ink transition-colors hover:border-leaf hover:bg-leaf-tint"
                            >
                              {link.label}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </section>

                  {/* Mid-article CTA, once the reader is invested */}
                  {data.sections.length >= 5 && i === Math.floor(data.sections.length / 2) - 1 && (
                    <div className="mb-14">
                      <WaitlistCta copy={copy} />
                    </div>
                  )}
                </React.Fragment>
              ))}

              {/* Conclusion */}
              <section className="rounded-2xl bg-ink-deep p-7 sm:p-10">
                <Eyebrow onDark>{data.conclusion.title}</Eyebrow>
                {data.conclusion.content.map((paragraph, j) => (
                  <p
                    key={j}
                    className={
                      j === 0
                        ? 'mt-4 font-display text-[24px] font-light leading-[1.25] tracking-[-0.01em] text-white sm:text-[30px]'
                        : 'mt-4 text-[16px] leading-[1.65] text-white/80 sm:text-[17px]'
                    }
                  >
                    {paragraph}
                  </p>
                ))}
                <a
                  href={WAITLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex h-12 items-center gap-3 rounded bg-white px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-leaf-on-dark hover:text-ink-deep"
                >
                  {copy.ctaButton}
                  <ArrowRight />
                </a>
              </section>

              {/* FAQ */}
              {data.faq && data.faq.length > 0 && (
                <section className="mt-16">
                  <h2 className="font-display text-[28px] font-light leading-[1.12] tracking-[-0.02em] text-ink sm:text-[36px]">
                    {copy.faq}
                  </h2>
                  <div className="mt-6 border-t border-rule">
                    {data.faq.map((item) => (
                      <details key={item.q} className="group border-b border-rule">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[17px] font-medium leading-[1.4] text-ink [&::-webkit-details-marker]:hidden">
                          {item.q}
                          <span
                            aria-hidden="true"
                            className="mt-0.5 text-[22px] font-light leading-none text-leaf transition-transform group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="pb-6 pr-10 text-[16px] leading-[1.7] text-ink-soft">{item.a}</p>
                      </details>
                    ))}
                  </div>
                  {faqJsonLd && (
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
                    />
                  )}
                </section>
              )}

              {/* Sources */}
              {data.sources && data.sources.length > 0 && (
                <section className="mt-16 border-t border-rule pt-8">
                  <Eyebrow>Sources</Eyebrow>
                  <ol className="mt-5 list-decimal space-y-2.5 pl-5 marker:text-ink-faint">
                    {data.sources.map((source) => (
                      <li key={source.url} className="pl-1">
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-words text-[14px] leading-[1.55] text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-ink"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Disclaimer + copyright */}
              <div className="mt-12 border-t border-rule pt-6">
                <p className="text-[13px] leading-[1.6] text-ink-soft">{copy.disclaimer}</p>
                <p className="mt-4 text-[12.5px] text-ink-soft">
                  &copy; 2026 MobiSoins &mdash; {copy.rights} {copy.protectedNote}
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mx-auto mt-20 max-w-[1180px] border-t border-rule pt-12 lg:mt-28">
              <div className="flex items-end justify-between gap-6">
                <h2 className="font-display text-[30px] font-light leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px]">
                  {copy.related}
                </h2>
                <Link
                  href="/articles"
                  className="hidden items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-leaf-text sm:inline-flex"
                >
                  {copy.all}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {related.map((card) => (
                  <Link key={card.slug} href={`/articles/${card.slug}`} className="group block">
                    <div className={`${FRAME} aspect-[16/10]`}>
                      <img
                        src={card.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          if (!img.src.endsWith(card.fallbackImage)) img.src = card.fallbackImage;
                        }}
                      />
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                      <span className="text-leaf-text">{language === 'FR' ? card.tagFr : card.tagEn}</span>
                      <span aria-hidden="true">·</span>
                      <span>
                        {card.readTime} {copy.read}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-[24px] font-light leading-[1.18] tracking-[-0.015em] text-ink transition-colors group-hover:text-leaf-text sm:text-[28px]">
                      {language === 'FR' ? card.titleFr : card.titleEn}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </PageShell>
  );
};
