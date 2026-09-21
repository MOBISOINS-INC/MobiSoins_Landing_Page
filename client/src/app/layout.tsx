import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif, Newsreader } from 'next/font/google';
import { LanguageProvider } from '../contexts/LanguageContext';
import './globals.css';
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, absoluteUrl, jsonLd, languageAlternates } from '../lib/seo';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

// Display serif for the landing sections below the hero.
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const HOME_TITLE = 'MobiSoins | Soins infirmiers à domicile à Montréal, Québec';
const HOME_DESCRIPTION =
  'Soins infirmiers à domicile au Québec par des infirmières membres de l’OIIQ. Lancement à Montréal, Laval et Longueuil. Inscrivez-vous à la liste d’attente.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLE, template: '%s | MobiSoins' },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: '/', languages: languageAlternates('/') },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    locale: 'fr_CA',
    alternateLocale: ['en_CA'],
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: {
    'theme-color': '#003366',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/mobisoins-logo.jpeg',
  },
};

/** Site-wide structured data: who MobiSoins is and where it operates. */
const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'MedicalBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: 'MobiSoins Inc.',
      alternateName: ['MobiSoins Québec', 'MobiSoins Canada'],
      // Google's AI Overview confused us with an unrelated French home-hospitalization
      // software of the same name: say plainly who and where we are.
      disambiguatingDescription:
        'Service québécois de soins infirmiers à domicile (Canada), basé à Montréal. Sans lien avec le logiciel français de même nom.',
      url: SITE_URL,
      address: { '@type': 'PostalAddress', addressLocality: 'Montréal', addressRegion: 'QC', addressCountry: 'CA' },
      sameAs: ['https://www.instagram.com/mobisoins/', 'https://www.facebook.com/p/MobiSoins-Inc-61562813077289/'],
      logo: absoluteUrl('/mobisoins-logo-navy.png'),
      image: absoluteUrl(DEFAULT_IMAGE),
      description: HOME_DESCRIPTION,
      medicalSpecialty: 'Nursing',
      // Launch area only. Québec City, Gatineau and Sherbrooke are waitlist cities, not served yet.
      areaServed: ['Montréal', 'Laval', 'Longueuil'].map((name) => ({
        '@type': 'City',
        name,
        containedInPlace: { '@type': 'State', name: 'Québec', containedInPlace: { '@type': 'Country', name: 'Canada' } },
      })),
      knowsLanguage: ['fr-CA', 'en-CA'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: ['fr-CA', 'en-CA'],
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} ${newsreader.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.web3forms.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://placehold.co" />
      </head>
      <body style={{ background: '#ffffff' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ORGANIZATION_LD) }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
