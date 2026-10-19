import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif, Inter, Newsreader } from 'next/font/google';
import { LanguageProvider } from '../contexts/LanguageContext';
import './globals.css';
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL, jsonLd, languageAlternates, verificationMetadata } from '../lib/seo';
import { HOME_DESCRIPTION, ORGANIZATION_LD } from '../lib/organizationLd';

// Body/heading face. Self-hosted by next/font so it is no longer a render-blocking
// stylesheet from fonts.googleapis.com (globals.css reads it as var(--font-inter)).
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-inter', display: 'swap' });
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

/**
 * Site-wide metadata shared by both root layouts (French at /, English at /en).
 * Each root layout exports it (merged with its own page metadata) so the two
 * trees stay identical except for the <html lang> attribute.
 */
export const rootMetadata: Metadata = {
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
  verification: verificationMetadata(process.env),
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

export type HtmlLang = 'fr-CA' | 'en-CA';

/**
 * The shared <html>/<body> document. Next.js needs one root layout per route
 * group so that the server-rendered HTML can carry the right `lang`:
 * src/app/(fr)/layout.tsx renders it with "fr-CA", src/app/en/layout.tsx with
 * "en-CA". Everything else (fonts, preconnects, JSON-LD, LanguageProvider) lives
 * here once so the two documents never drift apart.
 */
export function RootDocument({ lang, children }: { lang: HtmlLang; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning className={`${inter.variable} ${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} ${newsreader.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.web3forms.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
      </head>
      <body style={{ background: '#ffffff' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(ORGANIZATION_LD) }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
