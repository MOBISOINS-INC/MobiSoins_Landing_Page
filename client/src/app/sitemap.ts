import type { MetadataRoute } from 'next';
import { ARTICLE_INDEX } from '../data/articleIndex';
import { allServiceSlugs } from '../data/services';
import { absoluteUrl, languageAlternates } from '../lib/seo';
import { localizePath } from '../lib/i18n';

type Freq = 'weekly' | 'monthly' | 'yearly';

/** Every indexable page, in French and English, each entry pointing at its translation. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; freq: Freq; lastModified?: string }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/services', priority: 0.9, freq: 'monthly' },
    ...allServiceSlugs().map((slug) => ({ path: `/services/${slug}`, priority: 0.8, freq: 'monthly' as Freq })),
    { path: '/articles', priority: 0.8, freq: 'weekly' },
    ...ARTICLE_INDEX.map((a) => ({ path: `/articles/${a.slug}`, priority: 0.7, freq: 'monthly' as Freq, lastModified: a.dateModified })),
    { path: '/faq', priority: 0.6, freq: 'monthly' },
    { path: '/apropos', priority: 0.5, freq: 'monthly' },
    { path: '/contact', priority: 0.5, freq: 'monthly' },
    { path: '/confidentialite', priority: 0.2, freq: 'yearly' },
    { path: '/conditions', priority: 0.2, freq: 'yearly' },
    { path: '/cookies', priority: 0.2, freq: 'yearly' },
  ];
  const languages = (path: string) =>
    Object.fromEntries(Object.entries(languageAlternates(path)).map(([k, v]) => [k, absoluteUrl(v)]));
  return pages.flatMap(({ path, priority, freq, lastModified }) =>
    (['FR', 'EN'] as const).map((lang) => ({
      url: absoluteUrl(localizePath(path, lang)),
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: freq,
      priority,
      alternates: { languages: languages(path) },
    })),
  );
}
