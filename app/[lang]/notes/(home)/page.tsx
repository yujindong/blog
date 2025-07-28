import z from "zod";

type Props = {};

const Home = (props: Props) => {
  const Player = z.object({
    username: z.string(),
    xp: z.number(),
  });
  return <div>note home</div>;
};

export default Home;
