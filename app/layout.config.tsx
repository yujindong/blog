import { i18n } from "@/lib/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon } from "lucide-react";

// Make `baseOptions` a function:
export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    links: [
      {
        icon: <BookIcon />,
        text: "笔记",
        url: "/notes",
      },
    ],

    // different props based on `locale`
    nav: {
      title: "Yu",
      transparentMode: "top",
    },
  };
}
