import { articleMetadata } from '../../../../lib/articleSeo';

export const metadata = articleMetadata('telesante', 'EN');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
