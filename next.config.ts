import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/templates",
        destination: "/use-cases",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
