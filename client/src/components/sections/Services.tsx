'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { EYEBROW, H1, LEAD, CARD } from '../layout/PageShell';

/* ─── Intro to the services page: three care pillars ─────────── */

export const Services = ({ showViewAll = true }: { showViewAll?: boolean } = {}) => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  const cards = [
    {
      badge: t('services.card1Badge'),
      title: t('services.card1Title'),
      description: t('services.card1Description'),
      image: '/nurses/nurse-kid.jpeg',
      objectPosition: '50% 32%',
      points: [t('services.card1Point1'), t('services.card1Point2'), t('services.card1Point3')],
    },
    {
      badge: t('services.card2Badge'),
      title: t('services.card2Title'),
      description: t('services.card2Description'),
      image: '/nurses/nurse-07.jpeg',
      objectPosition: '50% 20%',
      points: [t('services.card2Point1'), t('services.card2Point2'), t('services.card2Point3')],
    },
    {
      badge: t('services.card3Badge'),
      title: t('services.card3Title'),
      description: t('services.card3Description'),
      image: '/nurses/elder-04.jpeg',
      objectPosition: '50% 28%',
      points: [t('services.card3Point1'), t('services.card3Point2'), t('services.card3Point3')],
    },
  ];

  const title = [
    t('services.mainTitle'),
    t('services.mainTitlePrefix'),
    t('services.mainTitleHighlight'),
    t('services.mainTitleSuffix'),
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id="services" className="pt-12 pb-16 sm:pt-16 lg:pt-24 lg:pb-24">
      <div className="container-custom">
        <div ref={ref} style={style}>
          <div className="max-w-[720px]">
            <span className={EYEBROW}>{t('services.badge')}</span>
            <h1 className={`${H1} mt-5`}>{title}</h1>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-[30px]">
            {cards.map((card) => (
              <article key={card.title} className={`${CARD} flex flex-col overflow-hidden`}>
                <div className="relative aspect-[16/10] border-b border-white/12 bg-ink-panel/50">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    style={{ objectPosition: card.objectPosition }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-sage">
                    {card.badge}
                  </span>
                  <h2 className="mt-3 text-[19px] font-medium leading-snug tracking-[-0.02em] text-white">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-[14.5px] font-light leading-relaxed text-white/78">
                    {card.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-white/10 pt-5">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-white">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={2.5} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {showViewAll && (
            <div className="mt-12 flex justify-center">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/5"
              >
                {t('services.seeAll')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
