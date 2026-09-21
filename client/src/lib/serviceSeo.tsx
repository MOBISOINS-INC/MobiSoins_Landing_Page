import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allServiceSlugs, getServiceBySlug } from '../data/services';
import { SERVICE_PHOTOS } from '../data/servicePhotos';
import { SITE_URL, absoluteUrl, jsonLd, pageMetadata } from './seo';
import { localizePath } from './i18n';
import type { Language } from './i18n';

export type ServiceParams = Promise<{ slug: string }>;

export const serviceStaticParams = () => allServiceSlugs().map((slug) => ({ slug }));

export async function serviceMetadata(params: ServiceParams, lang: Language): Promise<Metadata> {
  const found = getServiceBySlug((await params).slug);
  if (!found) return {};
  const { service } = found;
  return pageMetadata({
    title: lang === 'EN' ? `${service.nameEn} at home` : `${service.nameFr} à domicile`,
    description:
      lang === 'EN'
        ? `${service.shortEn} At home in Greater Montreal, by an OIIQ-licensed nurse.`
        : `${service.shortFr} À domicile dans le Grand Montréal, par une infirmière membre de l’OIIQ.`,
    path: `/services/${service.slug}`,
    lang,
    image: SERVICE_PHOTOS[service.slug]?.src,
  });
}

/** Server layout body for a service page: 404 on unknown slugs, plus its structured data. */
export async function ServiceLayout({ children, params, lang }: { children: React.ReactNode; params: ServiceParams; lang: Language }) {
  const found = getServiceBySlug((await params).slug);
  if (!found) notFound();
  const { service, category } = found;
  const en = lang === 'EN';
  const url = (path: string) => absoluteUrl(localizePath(path, lang));
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        name: en ? service.nameEn : service.nameFr,
        description: en ? service.longEn : service.longFr,
        inLanguage: en ? 'en-CA' : 'fr-CA',
        url: url(`/services/${service.slug}`),
        provider: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: en ? 'Home' : 'Accueil', item: url('/') },
          { '@type': 'ListItem', position: 2, name: 'Services', item: url('/services') },
          { '@type': 'ListItem', position: 3, name: en ? category.nameEn : category.nameFr, item: url('/services') },
          { '@type': 'ListItem', position: 4, name: en ? service.nameEn : service.nameFr, item: url(`/services/${service.slug}`) },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ld) }} />
      {children}
    </>
  );
}
