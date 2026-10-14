import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
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
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rustfs-endpoint.yhnotes.com",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
