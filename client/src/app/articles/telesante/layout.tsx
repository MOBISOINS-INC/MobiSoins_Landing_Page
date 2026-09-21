import { articleMetadata } from '../../../lib/articleSeo';

export const metadata = articleMetadata('telesante', 'FR');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
