/**
 * Locale routing. French lives at the root (/services), English under /en
 * (/en/services). The language shown is derived from the URL, never from
 * browser storage, so each URL always serves one language to people and to
 * search engines alike.
 */
export type Language = 'FR' | 'EN';

export const EN_PREFIX = '/en';

export const localeFromPath = (pathname: string | null | undefined): Language =>
  pathname === EN_PREFIX || pathname?.startsWith(`${EN_PREFIX}/`) || pathname?.startsWith(`${EN_PREFIX}#`) ? 'EN' : 'FR';

/** "/en/services/x" -> "/services/x", "/en" -> "/". Leaves French paths alone. */
export const stripLocale = (pathname: string): string => {
  if (localeFromPath(pathname) === 'FR') return pathname;
  const rest = pathname.slice(EN_PREFIX.length);
  return rest === '' || rest.startsWith('#') ? `/${rest}` : rest;
};

/** Internal site paths get the locale prefix; external links, assets and hashes pass through. */
export const localizePath = (href: string, lang: Language): string => {
  if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_next') || href.startsWith('/api')) return href;
  if (/\.[a-z0-9]{2,5}($|[?#])/i.test(href)) return href; // files: /favicon.png, /doc.pdf
  const base = stripLocale(href);
  if (lang === 'FR') return base;
  return base === '/' ? EN_PREFIX : base.startsWith('/#') ? `${EN_PREFIX}${base.slice(1)}` : `${EN_PREFIX}${base}`;
};

/** Crawlers keep no storage, so they would be redirected on every visit and the
 *  French pages would drop out of the index. They always get the URL as asked. */
const BOT_UA = /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|lighthouse|headless/i;

/** A BCP 47 tag whose primary language is French: "fr", "fr-CA", "FR-fr". ("en-FR" is not.) */
const isFrench = (tag: string): boolean => /^fr(?:-|$)/i.test(tag.trim());

/**
 * English is the default language for non-French browsers: a first-time
 * visitor whose browser lists no French language and who lands on a French
 * URL is sent to its English twin. A French-speaking browser (any entry of
 * navigator.languages starting with "fr") stays on the French URL. Anyone who
 * has picked a language with the switcher (stored as 'FR' or 'EN') is never
 * redirected again.
 */
export const englishRedirectFor = (
  pathname: string,
  hash: string,
  saved: string | null,
  userAgent: string,
  languages: readonly string[],
): string | null => {
  if (saved === 'FR' || saved === 'EN') return null;
  if (BOT_UA.test(userAgent)) return null;
  if (localeFromPath(pathname) === 'EN') return null;
  if (languages.some(isFrench)) return null;
  return localizePath(pathname + hash, 'EN');
};
