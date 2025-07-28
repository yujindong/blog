import { notes } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

function PreviewRenderer({ preview }: { preview: string }): ReactNode {
  return <div>preview</div>;

  return null;
}

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  console.log(params);
  const page = notes.getPage(params.slug, params.lang);
  if (!page) notFound();

  // const preview = page.data.preview;

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return notes.generateParams();
  // return notes.generateParams("slug", "locale");
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { slug, lang } = await props.params;

  const page = notes.getPage(slug, lang);
  console.log(page);
  if (!page) notFound();
  const image = {
    url: ["/og", ...(slug || []), "image.png"].join("/"),
    width: 1200,
    height: 630,
  };
  const prefix = lang !== "cn" ? `/${lang}` : "";
  return {
    title: page.data.title,
    keywords: page.data.keywords,
    description: page.data.description,
    openGraph: {
      url: `${prefix}/notes/${page.slugs.join("/")}`,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}
