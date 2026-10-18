import type { Metadata } from 'next';
import { RootDocument, rootMetadata } from '../RootDocument';
import { staticPageMetadata } from '../../lib/pageSeo';

// Root layout for the English tree (/en/**). It renders its own <html> so the
// server-rendered HTML says lang="en-CA" instead of patching it after hydration.
// The site-wide metadata is spread first so this tree keeps metadataBase, icons,
// robots, etc.; the English home titles/alternates/OG override on top (same
// shallow merge Next.js applied when this was a nested layout).
export const metadata: Metadata = { ...rootMetadata, ...staticPageMetadata('home', 'EN') };

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en-CA">{children}</RootDocument>;
}
