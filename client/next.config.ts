import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  // Two root layouts (/ and /en) need a global 404 document: see src/app/global-not-found.tsx.
  experimental: { globalNotFound: true },
  turbopack: {
    root: path.resolve(__dirname, '..'),
  },
  images: {
    remotePatterns: [
      { hostname: 'placehold.co' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
