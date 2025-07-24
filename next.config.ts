import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverExternalPackages: ["oxc-transform"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
    ignoreBuildErrors: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/up-to-date",
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default withMDX(nextConfig);
