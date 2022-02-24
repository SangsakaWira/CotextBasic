import { useUser } from "../contexts/UserContext";

export const About = () => {
  const user = useUser();

  return <h1>{user.username} From About</h1>;
};
