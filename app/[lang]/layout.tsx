import DefaultSearchDialog from "@/components/search";
import { baseUrl, createMetadata } from "@/lib/metadata";
import type { Translations } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import "../globals.css";

// translations
const cn: Partial<Translations> = {
  search: "搜索",
};

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "中文",
    locale: "cn",
  },
];

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: { cn }[lang],
          }}
          search={{
            SearchDialog: DefaultSearchDialog,
            hotKey: [{ display: "K", key: "k" }],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = createMetadata({
  title: {
    template: "%s | YuJindong",
    default: "YuJindong",
  },
  keywords: ["于金冬"],
  description: "开发笔记",
  metadataBase: baseUrl,
});
