import React from "react";
import ColorPellete from '../assets/images/colorpellete.png';
import MusicPlayer from '../assets/images/musicplayer.jpg';
import QRCode from '../assets/images/qrcode.jpg';
import ResSite from '../assets/images/res-site.jpeg';

const Projects = () => {
  const projectsData = [
    {
      title: "Color Pellete",
      imageUrl: ColorPellete,
      githubLink: "https://github.com/shaqqitech/reactjs-color-pallete",
      liveDemoLink: "https://shaqqitech.github.io/reactjs-color-pallete/",
    },
    {
      title: "Music Player",
      imageUrl: MusicPlayer,
      githubLink: "https://github.com/shaqqitech/music-player",
      liveDemoLink: "https://shaqqitech.github.io/music-player/",
    },
    {
      title: "QR Code Generator",
      imageUrl: QRCode,
      githubLink: "https://github.com/shaqqitech/qr-code-generator",
      liveDemoLink: "https://shaqqitech.github.io/qr-code-generator/",
    },
    {
      title: "Responsive Site",
      imageUrl: ResSite,
      githubLink: "https://github.com/shaqqitech/react-tail-port",
      liveDemoLink: "https://shaqqitech.github.io/react-tail-port/",
    },
  ];

  return (
    <section className="h-[fit-content] md:h-screen lg:h-[130vh] w-full py-12 text-center" id="projects">
      <div className="container mx-auto">
        <h1 className="text-4xl text-[#8338ec] font-bold mb-6">Projects</h1>
        <div className="md:w-[80%] lg:w-[60%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <ProjectBox
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
                githubLink={project.githubLink}
                liveDemoLink={project.liveDemoLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectBox = ({ title, imageUrl, githubLink, liveDemoLink }) => {
  return (
    <div className="w-[95%]  rounded-xl shadow-lg dark:shadow-2xl dark:shadow-gray-700 p-6 space-y-4 hover:scale-105 duration-300" data-aos="fade-left">
      <img src={imageUrl} alt={title} className="h-44 max-w-full mx-auto rounded-lg object-cover grid content-center " />
      <h1 className="font-bold text-[#8338ec] text-xl md:text-2xl lg:text-3xl">{title}</h1>
      <div className="flex justify-center space-x-4">
        <a href={githubLink} target="_blank" className="px-4 py-2 border border-[#8338ec] text-[#8338ec] rounded-md hover:bg-[#8338ec] hover:text-white transition duration-300">
          GitHub
        </a>
        <a href={liveDemoLink} target="_blank" className="px-4 py-2 border border-[#8338ec] text-[#8338ec] rounded-md hover:bg-[#8338ec] hover:text-white transition duration-300">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Projects;
