import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rustfs-endpoint.yhnotes.com",
        pathname: "/**",
      },
    ],
  },
};

import("@opennextjs/cloudflare").then((module) => module.initOpenNextCloudflareForDev());
export default nextConfig;
