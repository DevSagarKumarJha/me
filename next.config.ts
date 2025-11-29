import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use remotePatterns (recommended) to allow external image hosts
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "leetcode.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
