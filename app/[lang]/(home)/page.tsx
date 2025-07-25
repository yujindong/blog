import z from "zod";

type Props = {};

const Home = (props: Props) => {
  const Player = z.object({
    username: z.string(),
    xp: z.number(),
  });
  console.log(Player);
  return <div>Home</div>;
};

export default Home;
