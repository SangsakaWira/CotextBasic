import React, { useState, useContext } from "react";

export const UserContext = React.createContext({ username: "" });

export const useUser = () => {
  return useContext(UserContext);
};

export const setUser = () => {
  return setUser({ username: "Bambang" });
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "sangsakawira" });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
