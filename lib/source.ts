// .source folder will be generated when you run `next dev`
import { note } from "@/.source";
import { i18n } from "@/lib/i18n";
import { createLocalIcon, localIcons } from "@/lib/local-icon";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";

export const notes = loader({
  baseUrl: "/notes",
  i18n,
  icon(icon) {
    if (!icon) {
      return;
    }
    if (icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    }
    if (Object.keys(localIcons).includes(icon)) {
      return createLocalIcon(icon as keyof typeof localIcons);
    }
  },
  source: note.toFumadocsSource(),
  // pageTree: {
  //   attachFile,
  // },
});
// export const openapi = createOpenAPI({
//   proxyUrl: "/api/proxy",
// });

// export const noteSource = loader({
//   baseUrl: "/notes",
//   source: createMDXSource(notes),
// });
