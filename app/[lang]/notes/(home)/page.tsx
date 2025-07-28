import NoteEntries from "@/components/note-entries";
type Props = {
  params: Promise<{ lang: string; slug?: string[] }>;
};

export default async function NotesHome(props: Props) {
  const { lang } = await props.params;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-5xl px-6 py-12">
        <NoteEntries lang={lang} />
      </div>
    </div>
  );
}
