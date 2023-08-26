import React from "react";
import { FaCode, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa";  
import { SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Experience = () => {
  return (
    <section className="h-[fit-content] md:h-screen w-full py-12 text-center" id="experience">
      <div className="container mx-auto">
        <h1 className="text-4xl text-[#8338ec] font-bold mb-6">Experience</h1>
        <div className="md:w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExperienceBox
            icon={<FaCode size={35} color="#8338ec" />}
            title="Frontend Technologies"
            description={
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <FaHtml5 size={20} className="mr-2" />
                  HTML
                </li>
                <li className="flex items-center">
                  <FaCss3Alt size={20} className="mr-2" />
                  CSS
                </li>
                <li className="flex items-center">
                  <FaJs size={20} className="mr-2" />
                  JavaScript
                </li>
              </ul>
            }
          />
          <ExperienceBox
            icon={<FaReact size={35} color="#8338ec" />}
            title="Frontend Library/
            Framework"
            description={
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <FaReact size={20} className="mr-2" />
                  React JS
                </li>
                <li className="flex items-center">
                  <SiTailwindcss size={20} className="mr-2" />
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <FaBootstrap size={20} className="mr-2" />
                  Bootstrap
                </li>
              </ul>
            }
          />
          <ExperienceBox
            icon={<TbBrandReactNative size={35} color="#8338ec" />}
            title="Cross Platform Technology"
            description={
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <TbBrandReactNative size={20} className="mr-2" />
                  React Native
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
};

const ExperienceBox = ({ icon, title, description }) => {
  return (
    <div className=" hover:scale-105 duration-300 rounded-xl shadow-lg dark:shadow-2xl dark:shadow-gray-700 p-6 space-y-4">
      {icon}
      <h1 className="font-bold text-[#8338ec] text-xl md:text-2xl lg:text-3xl">{title}</h1>
      <div>{description}</div>
    </div>
  );
};

export default Experience;
