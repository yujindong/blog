import { notes } from "@/lib/source";
import { createTokenizer } from "@orama/tokenizers/mandarin";
import { createFromSource } from "fumadocs-core/search/server";

export const { GET } = createFromSource(notes, {
  // https://docs.orama.com/open-source/supported-languages
  // language: "english",
  localeMap: {
    en: { language: "english" },
    cn: {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});
