import { baseOptions } from "@/app/layout.config";
import { notes } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={notes.pageTree}
      {...baseOptions}
      sidebar={{
        banner: <div className="sr-only">预留广告位</div>,
        footer: <div className="sr-only">footer</div>,

        tabs: {
          transform(option, node) {
            const meta = notes.getNodeMeta(node);
            if (!meta || !node.icon) return option;
            const color = `var(--${meta.path.split("/")[0]}-color, var(--color-fd-foreground))`;
            return {
              ...option,
              icon: (
                <div
                  className="size-full rounded-lg text-(--tab-color) max-md:border max-md:bg-(--tab-color)/10 max-md:p-1.5 [&_svg]:size-full"
                  style={
                    {
                      "--tab-color": color,
                    } as object
                  }
                >
                  {node.icon}
                </div>
              ),
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
