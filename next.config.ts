import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/solutions",  destination: "/platform",      permanent: true },
      { source: "/network",    destination: "/",              permanent: true },
      { source: "/impact",     destination: "/sustainability", permanent: true },
    ];
  },
};

export default nextConfig;
