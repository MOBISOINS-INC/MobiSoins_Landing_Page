import { staticPageMetadata } from '../../lib/pageSeo';

export const metadata = staticPageMetadata('contact', 'FR');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
