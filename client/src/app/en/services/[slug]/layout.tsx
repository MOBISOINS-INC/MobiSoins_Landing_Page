import { ServiceLayout, serviceMetadata, serviceStaticParams } from '../../../../lib/serviceSeo';
import type { ServiceParams } from '../../../../lib/serviceSeo';

export const generateStaticParams = serviceStaticParams;

export const generateMetadata = ({ params }: { params: ServiceParams }) => serviceMetadata(params, 'EN');

export default function Layout({ children, params }: { children: React.ReactNode; params: ServiceParams }) {
  return <ServiceLayout params={params} lang="EN">{children}</ServiceLayout>;
}
