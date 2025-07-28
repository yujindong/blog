import Link from "next/link";
import z from "zod";

type Props = {};

const Home = (props: Props) => {
  const Player = z.object({
    username: z.string(),
    xp: z.number(),
  });
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-4 bg-amber-200">
        <h1 className="">标题</h1>
        <h2>副标题</h2>
        <div>description</div>
      </div>
      <div className="w-full max-w-5xl">
        <div>header</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link href={"/notes"}>
            <div className="rounded-3xl bg-amber-700">
              <h3>notes</h3>
            </div>
          </Link>
          <Link href={"/notes"}>
            <div>
              <h3>notes</h3>
            </div>
          </Link>
          <Link href={"/notes"}>
            <div>
              <h3>notes</h3>
            </div>
          </Link>
          <Link href={"/notes"}>
            <div>
              <h3>notes</h3>
            </div>
          </Link>
          <Link href={"/notes"}>
            <div>
              <h3>notes</h3>
            </div>
          </Link>
          <Link href={"/notes"}>
            <div>
              <h3>notes</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
