import type { Metadata } from 'next';
import { ARTICLE_INDEX } from '../data/articleIndex';
import { pageMetadata } from './seo';
import type { Language } from './i18n';

/** <head> metadata for one article, read from the article index. */
export function articleMetadata(slug: string, lang: Language = 'FR'): Metadata {
  const card = ARTICLE_INDEX.find((a) => a.slug === slug);
  if (!card) throw new Error(`articleMetadata: unknown article "${slug}"`);
  return pageMetadata({
    title: lang === 'EN' ? card.titleEn : card.titleFr,
    description: lang === 'EN' ? card.descriptionEn : card.descriptionFr,
    lang,
    path: `/articles/${card.slug}`,
    image: card.image,
    type: 'article',
    publishedTime: card.datePublished,
    modifiedTime: card.dateModified,
  });
}
