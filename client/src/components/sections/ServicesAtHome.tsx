'use client';

import { useRef, useState } from 'react';
import Link from '../ui/LocaleLink';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { ArrowRight, DISPLAY, Eyebrow } from '../ui/editorial';
import { SERVICE_CATEGORIES } from '../../data/services';
import { ARTICLE_INDEX } from '../../data/articleIndex';

// There are no real patient quotes yet, and inventing them for a healthcare
// service is not an option — so this slot answers the question visitors actually
// arrive with ("can they do the thing I need?") using the service copy that
// already exists under `about.*`. Set as a numbered, ruled index: not cards.
const SERVICES = [1, 2, 3, 4, 5, 6, 7] as const;

// Each homepage row lists its category's services as links, so the homepage
// passes authority straight to every service page (not only to /services).
const CATEGORY_FOR_ROW: Record<(typeof SERVICES)[number], string> = {
  1: 'nursing', 2: 'chronic', 3: 'checkup', 4: 'sexual', 5: 'seniors', 6: 'analysis', 7: 'enterprises',
};
const servicesFor = (row: (typeof SERVICES)[number]) =>
  SERVICE_CATEGORIES.find((c) => c.id === CATEGORY_FOR_ROW[row])?.services ?? [];

export const ServicesAtHome = () => {
  const { t, language } = useLanguage();
  const { ref, style } = useReveal();
  // Mobile slider: one full-width card per view, driven by arrows.
  const track = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  };
  const onScroll = () => {
    const el = track.current;
    if (el) setSlide(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <section id="services-at-home" className="bg-paper pb-12 pt-12 lg:pb-[120px] lg:pt-[136px]">
      <div className="container-custom">
        <div ref={ref} style={style} className="flex flex-col gap-5 lg:gap-16">
          <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:gap-x-20">
            <div className="flex flex-col gap-4 lg:gap-6">
              <Eyebrow>{t('v2.servicesEyebrow')}</Eyebrow>
              <h2 className={`${DISPLAY} max-w-[680px] text-[28px] leading-[1.08] lg:text-[60px] lg:leading-[1.04]`}>
                {t('v2.servicesTitle')}
              </h2>
            </div>
            <p className="order-last text-[13px] leading-relaxed text-ink-soft lg:order-none lg:text-[15px]">
              {t('v2.servicesNote')}
            </p>
          </div>

          <div className="flex items-center justify-between lg:hidden">
            <span className="text-[12px] font-semibold tabular-nums tracking-[0.12em] text-ink-soft">
              {String(Math.min(slide + 1, SERVICES.length)).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={slide === 0}
                aria-label={language === 'EN' ? 'Previous' : 'Précédent'}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink text-ink transition-opacity disabled:opacity-30"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={slide >= SERVICES.length - 1}
                aria-label={language === 'EN' ? 'Next' : 'Suivant'}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-opacity disabled:opacity-30"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div ref={track} onScroll={onScroll} className="-mt-2 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:overflow-visible lg:border-t lg:border-ink [&::-webkit-scrollbar]:hidden">
            {SERVICES.map((n) => (
              <div
                key={n}
                className="grid w-full shrink-0 snap-start grid-cols-[26px_minmax(0,1fr)] gap-x-2 rounded-md border border-rule bg-white p-4 lg:w-auto lg:rounded-none lg:border-0 lg:border-b lg:bg-transparent lg:p-0 lg:py-7 lg:grid-cols-[48px_minmax(0,1fr)] lg:gap-x-4 lg:py-7"
              >
                <div className="pt-1 text-[12px] font-semibold text-leaf-text lg:pt-[5px] lg:text-[13px]">
                  {String(n).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-sans text-[16px] font-semibold tracking-normal text-ink lg:text-[21px]">
                    {t(`about.service${n}Title`)}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.5] text-ink-soft lg:mt-2 lg:text-[15px]">
                    {t(`about.service${n}Desc`)}
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 lg:mt-3 lg:gap-x-4 lg:gap-y-1.5">
                    {servicesFor(n).map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="text-[12px] font-medium text-leaf-text underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-ink lg:text-[14px]"
                        >
                          {language === 'EN' ? svc.nameEn : svc.nameFr}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="hidden items-center lg:flex lg:py-7">
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center gap-2.5 border-b border-leaf pb-1 text-[16px] font-semibold text-ink transition-colors hover:border-ink"
              >
                {t('v2.servicesMore')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <Link
            href="/services"
            className="-mt-1 inline-flex min-h-11 items-center gap-2.5 self-start border-b border-leaf pb-1 text-[15px] font-semibold text-ink lg:hidden"
          >
            {t('v2.servicesMore')}
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Guides: links the long-form articles from the homepage. Desktop only —
              on mobile they sit at the top of the menu instead. */}
          <div className="hidden flex-col gap-6 lg:flex border-t border-rule pt-10 lg:pt-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-3">
                <Eyebrow>{t('v2.guidesEyebrow')}</Eyebrow>
                <h2 className={`${DISPLAY} text-[30px] leading-[1.1] lg:text-[40px]`}>{t('v2.guidesTitle')}</h2>
              </div>
              <Link
                href="/articles"
                className="inline-flex min-h-11 items-center gap-2.5 border-b border-leaf pb-1 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
              >
                {t('v2.guidesAll')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="grid grid-cols-1 border-t border-ink lg:grid-cols-3 lg:gap-x-10">
              {ARTICLE_INDEX.map((a) => (
                <li key={a.slug} className="border-b border-rule">
                  <Link href={`/articles/${a.slug}`} className="group flex flex-col gap-2 py-5 lg:py-6">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-leaf-text">
                      {language === 'EN' ? a.tagEn : a.tagFr}
                    </span>
                    <span className="font-sans text-[17px] font-semibold leading-snug text-ink group-hover:underline group-hover:underline-offset-4 lg:text-[19px]">
                      {language === 'EN' ? a.titleEn : a.titleFr}
                    </span>
                    <span className="text-[14px] leading-[1.55] text-ink-soft">
                      {language === 'EN' ? a.descriptionEn : a.descriptionFr}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
