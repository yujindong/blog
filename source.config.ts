import { remarkTypeScriptToJavaScript } from "fumadocs-docgen/remark-ts2js";
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import z from "zod";

export const note = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
      keywords: z.array(z.string()).optional(),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      testlastdate: z.string().optional(),
    }),
  },

  dir: "content/notes",
});

// export const notes = defineCollections({
//   type: "doc",
//   dir: "content/notes",
//   async: true,
// });

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkTypeScriptToJavaScript],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
