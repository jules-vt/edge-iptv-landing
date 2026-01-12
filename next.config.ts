import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  // Optimize production build
  compress: true,
  poweredByHeader: false,
  // Enable Turbopack with empty config
  turbopack: {},
};

export default nextConfig;
