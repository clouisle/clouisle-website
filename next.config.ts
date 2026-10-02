import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:lang(en|zh)/release-notes/latest",
        destination: "/:lang/release-notes",
        permanent: true,
      },
    ];
  },
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
