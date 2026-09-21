import { staticPageMetadata } from '../../lib/pageSeo';

export const metadata = staticPageMetadata('services', 'FR');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
