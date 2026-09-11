'use client';

import dynamic from 'next/dynamic';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Credentials } from '../components/sections/Credentials';

function SectionLoader() {
  return (
    <div className="w-full h-24 flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
    </div>
  );
}

const HowItWorks = dynamic(
  () => import('../components/sections/HowItWorks').then((m) => ({ default: m.HowItWorks })),
  { loading: () => <SectionLoader /> }
);
const ServicesAtHome = dynamic(
  () => import('../components/sections/ServicesAtHome').then((m) => ({ default: m.ServicesAtHome })),
  { loading: () => <SectionLoader /> }
);
const Newsletter = dynamic(
  () => import('../components/sections/Newsletter').then((m) => ({ default: m.Newsletter })),
  { loading: () => <SectionLoader /> }
);
const NursingMapSection = dynamic(
  () => import('../components/sections/NursingMapSection').then((m) => ({ default: m.NursingMapSection })),
  { loading: () => <SectionLoader /> }
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* The hero dissolves into white on desktop, so the page below is one
            continuous light ground — no gradient seam to manage any more. */}
        <HowItWorks />
        <Credentials />
        <NursingMapSection />
        <ServicesAtHome />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
