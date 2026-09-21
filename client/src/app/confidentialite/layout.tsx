import { staticPageMetadata } from '../../lib/pageSeo';

export const metadata = staticPageMetadata('confidentialite', 'FR');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
