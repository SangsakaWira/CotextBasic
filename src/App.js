import "./styles.css";
import React from "react";
import { Home } from "./components/Home";
import { UserProvider } from "./contexts/UserContext";
import { About } from "./components/About";

export default function App() {
  return (
    <UserProvider>
      <Home />
      <About />
    </UserProvider>
  );
}
