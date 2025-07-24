import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverExternalPackages: ["oxc-transform"],
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
