import { useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={`${
        theme === "light" ? "light-theme" : "dark-theme"
      } overflow-hidden `}
    >
      <Navbar setTheme={setTheme} theme={theme} />
      <Hero />
      <About />
      <Skills />
      <Projects theme={theme} />
      <Contact />
    </div>
  );
};
