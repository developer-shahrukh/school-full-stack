
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[{ hostname: "images.pexels.com"}]
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false; // Disable caching in development
    }
    return config;
  },
};

export default nextConfig;
