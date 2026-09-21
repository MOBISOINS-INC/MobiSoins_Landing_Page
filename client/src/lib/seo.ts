/**
 * SEO helpers shared by every route's metadata, the sitemap and robots.txt.
 * The pages themselves are client components, so each route folder carries a
 * small server `layout.tsx` that calls pageMetadata() for its <head>.
 */
import type { Metadata } from 'next';
import { localizePath } from './i18n';
import type { Language } from './i18n';

/** The live, canonical origin (www.mobisoins.com). Override per environment if needed. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mobisoins.com').replace(/\/$/, '');
export const SITE_NAME = 'MobiSoins';
export const DEFAULT_IMAGE = '/mobisoins-logo.jpeg';

export const absoluteUrl = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

interface PageMeta {
  title: string;
  description: string;
  /** The French (root) path, e.g. "/services". The English URL is derived from it. */
  path: string;
  lang?: Language;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

/** hreflang alternates for one page: French at the root, English under /en. */
export const languageAlternates = (path: string) => ({
  'fr-CA': localizePath(path, 'FR'),
  'en-CA': localizePath(path, 'EN'),
  'x-default': localizePath(path, 'FR'),
});

export function pageMetadata({ title, description, path, lang = 'FR', image = DEFAULT_IMAGE, type = 'website', publishedTime, modifiedTime }: PageMeta): Metadata {
  const url = localizePath(path, lang);
  // Absolute title: nested layouts (e.g. /articles then /articles/x) would
  // otherwise stop the root "%s | MobiSoins" template from applying.
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      locale: lang === 'EN' ? 'en_CA' : 'fr_CA',
      alternateLocale: [lang === 'EN' ? 'fr_CA' : 'en_CA'],
      title: fullTitle,
      description,
      images: [image],
      ...(type === 'article' ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
  };
}

/** Serialize JSON-LD safely for a <script> tag (no closing-tag injection). */
export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
