import { ORGANIZATION_ID } from './organizationLd';
import { SITE_URL, absoluteUrl, jsonLd } from './seo';
import { localizePath } from './i18n';
import type { Language } from './i18n';

/** ContactPage structured data for /contact and /en/contact, tied to the organization node. */
export function ContactPageLd({ lang }: { lang: Language }) {
  const en = lang === 'EN';
  const pageUrl = absoluteUrl(localizePath('/contact', lang));
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: en ? 'Contact MobiSoins' : 'Contacter MobiSoins',
        inLanguage: en ? 'en-CA' : 'fr-CA',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': ORGANIZATION_ID },
        mainEntity: { '@id': ORGANIZATION_ID },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: en ? 'Home' : 'Accueil', item: absoluteUrl(localizePath('/', lang)) },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: pageUrl },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ld) }} />;
}
