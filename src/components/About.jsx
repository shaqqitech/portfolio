import React from "react";
import HomePic from "../assets/images/profilepic.png";
import { SlBadge } from "react-icons/sl";
import { GoProjectSymlink } from "react-icons/go";
import { MdSportsCricket } from "react-icons/md";
import { GrReactjs } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi"; 

const About = () => {
  return (
    <section className="h-[fit-content] md:h-screen w-full py-12 text-center" id="about">
      <div className="container mx-auto">
        {/* About me Section */}
        <h1 className="text-4xl text-[#8338ec] font-bold mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 md:space-y-0 space-y-6">
          {/* Image content */}
          <div className="w-48 md:w-60 h-60 md:h-72 border-2 border-black rounded-full overflow-hidden mb-6 md:mb-0">
            <img src={HomePic} alt="" className="object-cover w-full h-full" />
          </div>
          {/* Boxes Content */}
          <div className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Box
              icon={<SlBadge size={35} color="white" />}
              title="Experience"
              value="1.5+ years"
            />
            <Box
              icon={<GoProjectSymlink size={35} color="white" />}
              title="Projects"
              value="20+"
            />
            <Box
              icon={<MdSportsCricket size={35} color="white" />}
              title="Hobby"
              value="Cricket"
            />
            <Box
              icon={<GrReactjs size={35} color="white" />}
              title="Favorite Library"
              value="React JS"
            />
            <Box
              icon={<FaLaptopCode size={35} color="white" />}
              title="Skills"
              value="Frontend Development"
            />
            <Box
              icon={<HiLightBulb size={35} color="white" />}
              title="Approach"
              value="Self-Taught Learner"
            />
          </div>
        </div>
        <div className="mt-6 md:mt-12 text-center">
          <a href="https://wa.me/+923204101834/" target="_blank" className="w-32 h-10 border-2 border-black mx-auto shadow-lg bg-[#8338ec] text-white flex justify-center items-center rounded-lg">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

const Box = ({ icon, title, value }) => {
  return (
    <div className="bg-[#8338ec] rounded-xl shadow-lg p-6 space-y-2">
      {icon}
      <h1 className="font-bold text-white text-3xl">{title}</h1>
      <p className="font-bold text-white text-xl">{value}</p>
    </div>
  );
};

export default About;
