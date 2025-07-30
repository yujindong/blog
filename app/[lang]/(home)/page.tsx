import NoteEntries from "@/components/note-entries";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-red-200 sm:bg-white md:bg-black">aaa</div>
      <div className="flex flex-col items-center gap-y-4 bg-amber-950">
        {/* <h1 className="">标题</h1>
        <h2>副标题</h2>
        <div>description</div> */}
      </div>
      <div className="w-full max-w-5xl px-6 py-12">
        {/* <div>header</div> */}
        <NoteEntries lang={lang} />
      </div>
    </div>
  );
}
