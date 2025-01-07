import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/", // When visiting `/`
        destination: "/digital-marketing", // Redirect to `/digital-marketing`
        permanent: true, // Use true for a 301 permanent redirect, false for a 302 temporary redirect
      },
    ];
  },
};

export default nextConfig;
