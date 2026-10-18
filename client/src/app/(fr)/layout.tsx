import { RootDocument, rootMetadata } from '../RootDocument';

// Root layout for the French tree (every route not under /en). The route group
// keeps URLs unchanged; it only exists so the server can emit lang="fr-CA".
export const metadata = rootMetadata;

export default function FrenchRootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="fr-CA">{children}</RootDocument>;
}
