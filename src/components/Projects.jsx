import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Project 1",
      imageUrl: "path_to_project1_image",
      githubLink: "github_link_project1",
      liveDemoLink: "live_demo_link_project1",
    },
    {
      title: "Project 2",
      imageUrl: "path_to_project2_image",
      githubLink: "github_link_project2",
      liveDemoLink: "live_demo_link_project2",
    },
    {
      title: "Project 3",
      imageUrl: "path_to_project1_image",
      githubLink: "github_link_project1",
      liveDemoLink: "live_demo_link_project1",
    },
    {
      title: "Project 4",
      imageUrl: "path_to_project2_image",
      githubLink: "github_link_project2",
      liveDemoLink: "live_demo_link_project2",
    },
    // Add more projects here...
  ];

  return (
    <section className="h-[fit-content] md:h-screen lg:h-[130vh] w-full py-12 text-center bg-[#f5f5f5]" id="projects">
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
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <img src={imageUrl} alt={title} className="w-full h-44 object-cover rounded-md" />
      <h1 className="font-bold text-[#8338ec] text-xl md:text-2xl lg:text-3xl">{title}</h1>
      <div className="flex justify-center space-x-4">
        <a href={githubLink} className="px-4 py-2 border border-[#8338ec] text-[#8338ec] rounded-md hover:bg-[#8338ec] hover:text-white transition duration-300">
          GitHub
        </a>
        <a href={liveDemoLink} className="px-4 py-2 border border-[#8338ec] text-[#8338ec] rounded-md hover:bg-[#8338ec] hover:text-white transition duration-300">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Projects;
