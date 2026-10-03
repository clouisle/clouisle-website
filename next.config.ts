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
  turbopack: {
    // Release Markdown is bundled as a string (see content/release-notes/sources.ts): the
    // Cloudflare Workers runtime has no content/ directory to read at request time.
    rules: {
      "**/content/release-notes/*/*.md": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
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
