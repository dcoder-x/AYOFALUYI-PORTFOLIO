import React from "react";
import '../styles/featured.scss'
import HorizontalScroll from "react-scroll-horizontal";

const Featured = () => {
  interface projects {
    name: string;
    role: string;
    image: string;
    url: string;
  }

  const projects: projects[] = [
    {
      name: "BEKKAH AI",
      role: "FRONTEND ENGINEER",
      image: " ",
      url: "",
    },
    {
      name: "BEKKAH AI",
      role: "FRONTEND ENGINEER",
      image: " ",
      url: "",
    },
    {
      name: "BEKKAH AI",
      role: "FRONTEND ENGINEER",
      image: " ",
      url: "",
    },
    {
      name: "BEKKAH AI",
      role: "FRONTEND ENGINEER",
      image: " ",
      url: "",
    },
  ];
  return (
    <HorizontalScroll

    pageLock={true}
    
    className="featured h-screen">
      {projects.map((project,i): JSX.Element => {
        return (
          <section key={i} className="project">
            <img src={project.image} alt="" className="absolute w-full-h-full project-image" />
            <div className="text">
              <p className="project-name">{project.name}</p>
              <p className="project-role">{project.role}</p>
            </div>

            <button onClick={()=>window.open(project.url)} className="my-2 border  border-solid border-[#B7AB98] p-2 py-1 sound-button items-center flex rounded-full">
              View site
            </button>
          </section>
        );
      })}
    </HorizontalScroll>
  );
};

export default Featured;
