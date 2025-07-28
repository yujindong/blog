import { generateOGImage } from "@/app/og/[...slug]/generateOGImage";
import { notes } from "@/lib/source";
import { notFound } from "next/navigation";
import { readFileSync } from "node:fs";

const font = readFileSync("./app/og/[...slug]/JetBrainsMono-Regular.ttf");
const fontBold = readFileSync("./app/og/[...slug]/JetBrainsMono-Bold.ttf");
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = notes.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return generateOGImage({
    primaryTextColor: "rgb(240,240,240)",
    title: page.data.title,
    description: page.data.description,
    fonts: [
      {
        name: "Mono",
        data: font,
        weight: 400,
      },
      {
        name: "Mono",
        data: fontBold,
        weight: 600,
      },
    ],
  });
}

export function generateStaticParams(): {
  slug: string[];
}[] {
  const a = notes.generateParams().map((page) => ({
    ...page,
    slug: [...page.slug, "image.png"],
  }));
  return a;
}
