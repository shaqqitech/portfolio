import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./index.css";
import Self from "./components/Self";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center w-full  ${
          darkMode ? "dark" : ""
        }`}
      >
        {/* Navbar */}
        <div className="flex justify-around items-center w-[90%] my-7">
          <h1 className="text-3xl font-semibold">
            Shaqqi<span className="text-[#8338ec] font-bold">Tech</span>
          </h1>
          <div onClick={toggleDarkMode}>
            <BsFillMoonStarsFill size={35} style={{ cursor: "pointer" }} />
          </div>
        </div>
        <Home />
        <About />
        <Experience />
        <Self />
        <Projects />
        <Contact />
        <Navbar />
      </div>
    </>
  );
}

export default App;
