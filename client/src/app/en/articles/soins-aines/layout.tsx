import { articleMetadata } from '../../../../lib/articleSeo';

export const metadata = articleMetadata('soins-aines', 'EN');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
