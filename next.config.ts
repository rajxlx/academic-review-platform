import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['15.207.20.76', 'techlearning.shop', 'localhost', '*.techlearning.shop'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
