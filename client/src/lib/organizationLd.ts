/**
 * Site-wide structured data: who MobiSoins is, where it is and how to reach it.
 * Kept as a plain module (no JSX, no next/font) so `npm test` can import it and
 * guard the fields Google needs for a local result / knowledge panel.
 *
 * Contact facts mirror the contact page (src/components/sections/Contact.tsx).
 */
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from './seo.ts';

export const HOME_DESCRIPTION =
  'Soins infirmiers à domicile au Québec par des infirmières membres de l’OIIQ. Lancement à Montréal, Laval et Longueuil. Inscrivez-vous à la liste d’attente.';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/** E.164, as the contact page's tel: links. */
export const CONTACT_PHONE = '+12635886196';
export const CONTACT_FAX = '+18003077231';
export const CONTACT_EMAIL = 'info@mobisoins.com';

export const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '8457 Boulevard Newman, Bureau 118',
  addressLocality: 'LaSalle',
  addressRegion: 'QC',
  postalCode: 'H8N 0A2',
  addressCountry: 'CA',
} as const;

/** Launch area only. Québec City, Gatineau and Sherbrooke are waitlist cities, not served yet. */
export const SERVED_CITIES = ['Montréal', 'Laval', 'Longueuil'] as const;

export const AREA_SERVED = SERVED_CITIES.map((name) => ({
  '@type': 'City',
  name,
  containedInPlace: { '@type': 'State', name: 'Québec', containedInPlace: { '@type': 'Country', name: 'Canada' } },
}));

export const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'MedicalBusiness'],
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
      legalName: 'MobiSoins Inc.',
      alternateName: ['MobiSoins Québec', 'MobiSoins Canada'],
      // Google's AI Overview confused us with an unrelated French home-hospitalization
      // software of the same name: say plainly who and where we are.
      disambiguatingDescription:
        'Service québécois de soins infirmiers à domicile (Canada), basé à Montréal. Sans lien avec le logiciel français de même nom.',
      url: SITE_URL,
      telephone: CONTACT_PHONE,
      faxNumber: CONTACT_FAX,
      email: CONTACT_EMAIL,
      address: POSTAL_ADDRESS,
      // Geocoded from the street address (OpenStreetMap Nominatim, 2026-10).
      geo: { '@type': 'GeoCoordinates', latitude: 45.4323226, longitude: -73.6319713 },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        availableLanguage: ['French', 'English'],
        areaServed: 'CA',
      },
      sameAs: ['https://www.instagram.com/mobisoins/', 'https://www.facebook.com/p/MobiSoins-Inc-61562813077289/'],
      logo: absoluteUrl('/mobisoins-logo-navy@2x.webp'),
      image: absoluteUrl(DEFAULT_IMAGE),
      description: HOME_DESCRIPTION,
      areaServed: AREA_SERVED,
      knowsLanguage: ['fr-CA', 'en-CA'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: ['fr-CA', 'en-CA'],
      publisher: { '@id': ORGANIZATION_ID },
    },
  ],
};
