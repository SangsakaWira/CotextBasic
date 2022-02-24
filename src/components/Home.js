import { useUser } from "../contexts/UserContext";

export const Home = () => {
  const user = useUser();

  return <h1>{user.username} From Home</h1>;
};
