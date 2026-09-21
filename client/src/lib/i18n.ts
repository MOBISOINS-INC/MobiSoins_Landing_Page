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
