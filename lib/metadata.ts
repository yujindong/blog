import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://www.yujindong.com",
      images: "/assets/banner.jpg",
      siteName: "YuJindong",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@money_is_shark",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/assets/banner.jpg",
      ...override.twitter,
    },
    alternates: {
      types: {
        "application/rss+xml": [
          {
            title: "YuJindong Blog",
            url: "https://www.yujindong.com/rss.xml",
          },
        ],
      },
      ...override.alternates,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development" || !process.env.VERCEL_URL
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.VERCEL_URL}`);
