import { staticPageMetadata } from '../../lib/pageSeo';

export const metadata = staticPageMetadata('articles', 'FR');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
