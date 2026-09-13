'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { EYEBROW, H1, LEAD, FRAME } from '../layout/PageShell';

export const Blog = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();

  const articles = [
    {
      image: '/images/articles/telesante.jpg',
      fallback: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
      tags: [t('blog.article1Tag1'), t('blog.article1Tag2')],
      title: t('blog.article1Title'),
      description: t('blog.article1Description'),
      readTime: '5 min',
      link: '/articles/telesante',
    },
    {
      image: '/images/articles/premiere-visite.jpg',
      fallback: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      tags: [t('blog.article2Tag1'), t('blog.article2Tag2')],
      title: t('blog.article2Title'),
      description: t('blog.article2Description'),
      readTime: '4 min',
      link: '/articles/premiere-visite',
    },
    {
      image: '/images/articles/soins-aines.jpg',
      fallback: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=800&q=80',
      tags: [t('blog.article3Tag1'), t('blog.article3Tag2')],
      title: t('blog.article3Title'),
      description: t('blog.article3Description'),
      readTime: '6 min',
      link: '/articles/soins-aines',
    },
  ];

  const [featured, ...rest] = articles;

  const Meta = ({ tags, readTime }: { tags: string[]; readTime: string }) => (
    <div className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/60">
      <span className="text-sage">{tags[0]}</span>
      <span aria-hidden="true">·</span>
      <span>
        {readTime} {t('blog.readTime')}
      </span>
    </div>
  );

  return (
    <section className="pt-12 pb-20 sm:pt-16 lg:pt-24 lg:pb-28">
      <div className="container-custom">
        <div ref={ref} style={style}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className={EYEBROW}>{t('blog.badge') || 'Ressources'}</span>
              <h1 className={`${H1} mt-5`}>{t('blog.title')}</h1>
            </div>
            <p className={`${LEAD} max-w-[380px] md:text-right`}>{t('blog.subtitle')}</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-[30px]">
            {/* Featured */}
            <Link href={featured.link} className="group block lg:col-span-3">
              <div className={`${FRAME} aspect-[16/10]`}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = featured.fallback; }}
                />
              </div>
              <div className="mt-5">
                <Meta tags={featured.tags} readTime={featured.readTime} />
                <h2 className="mt-3 font-sans font-light text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.12] tracking-[0.01em] text-white">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-[600px] text-[15.5px] font-light leading-relaxed text-white/78">
                  {featured.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-white">
                  {t('blog.readMore')}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            {/* Secondary */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              {rest.map((article) => (
                <Link key={article.link} href={article.link} className="group block border-t border-white/30 pt-5">
                  <div className="grid grid-cols-[1fr_120px] gap-5 sm:grid-cols-[1fr_160px]">
                    <div>
                      <Meta tags={article.tags} readTime={article.readTime} />
                      <h2 className="mt-3 text-[18px] font-medium leading-snug tracking-[-0.02em] text-white sm:text-[20px]">
                        {article.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-[14px] font-light leading-relaxed text-white/78">
                        {article.description}
                      </p>
                    </div>
                    <div className={`${FRAME} aspect-square`}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).src = article.fallback; }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
