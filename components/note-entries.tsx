import LinkCard from "@/components/base/link-card";
import { notes } from "@/lib/source";

type Props = {
  lang: string;
};

const NoteEntries = ({ lang }: Props) => {
  const list = notes
    .generateParams()
    .filter((item) => item.slug.length === 1 && item.lang === lang);
  const pages = list
    .map((item) => notes.getPage(item.slug, item.lang))
    .filter((item) => item !== undefined);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {pages.map((page) => (
        <LinkCard key={page?.path} href={page.url} variant="destructive">
          <h3>{page.data.title}</h3>
          <p>{page.data.description}</p>
        </LinkCard>
      ))}
    </div>
  );
};

export default NoteEntries;
