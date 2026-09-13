'use client';

import dynamic from 'next/dynamic';
import { SmoothScroll } from '../components/providers/SmoothScroll';
import { FloatingHeader } from '../components/layout/v3/FloatingHeader';
import { FloatingBar } from '../components/layout/v3/FloatingBar';
import { Colophon } from '../components/layout/v3/Colophon';
import { VideoGround } from '../components/sections/v3/VideoGround';
import { Approach } from '../components/sections/v3/Approach';

function SectionLoader() {
  return (
    <div className="w-full h-16 flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-white/20 border-t-white/70 rounded-full animate-spin" />
    </div>
  );
}

const VisitPinned = dynamic(
  () => import('../components/sections/v3/VisitPinned').then((m) => ({ default: m.VisitPinned })),
  { loading: () => <SectionLoader /> }
);
const CareCards = dynamic(
  () => import('../components/sections/v3/CareCards').then((m) => ({ default: m.CareCards })),
  { loading: () => <SectionLoader /> }
);
const Launch = dynamic(
  () => import('../components/sections/v3/Launch').then((m) => ({ default: m.Launch })),
  { loading: () => <SectionLoader /> }
);

// v3 landing (fiftyseven language): the hero video is the persistent ground —
// it stays sticky under every chapter, dimmed by a scroll-scrubbed scrim — and
// the chapters scroll over it as transparent layers. Header/footer are the
// floating pills; the classic Header/Footer stay on the inner pages.
export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-ink text-white">
        <FloatingHeader />
        <main className="relative">
          <VideoGround />
          <div className="relative z-10">
            <Approach />
            <VisitPinned />
            <CareCards />
            <Launch />
            <Colophon />
          </div>
        </main>
        <FloatingBar />
      </div>
    </SmoothScroll>
  );
}
