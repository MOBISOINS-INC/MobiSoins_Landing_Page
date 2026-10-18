import { RootDocument, rootMetadata } from './RootDocument';
import NotFound from './(fr)/not-found';

// With two root layouts (French at /, English at /en) there is no single
// app/layout.tsx for an unmatched URL to fall back on, so Next.js needs this
// file (experimental.globalNotFound) to keep the branded 404 page. The copy is
// French (as the old 404 was), so the document is labeled fr-CA.
export const metadata = { ...rootMetadata, title: { absolute: 'Page introuvable | MobiSoins' }, robots: { index: false, follow: false } };

export default function GlobalNotFound() {
  return (
    <RootDocument lang="fr-CA">
      <NotFound />
    </RootDocument>
  );
}
