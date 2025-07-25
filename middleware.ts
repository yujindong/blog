import { i18n } from "@/lib/i18n";
import { createI18nMiddleware } from "fumadocs-core/i18n";
import { MiddlewareConfig } from "next/server";

export default createI18nMiddleware(i18n);

export const config: MiddlewareConfig = {
  // Matcher ignoring `/_next/` and `/api/`
  // You may need to adjust it to ignore static assets in `/public` folder
  matcher: [
    {
      source:
        "/((?!api|assets|og|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      // missing: [
      //   { type: "header", key: "next-router-prefetch" },
      //   { type: "header", key: "purpose", value: "prefetch" },
      // ],
    },
  ],
};
