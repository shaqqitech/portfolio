import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <div className={`flex flex-col justify-center items-center px-4`}>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Navbar />
      </div>
    </>
  );
}

export default App;
