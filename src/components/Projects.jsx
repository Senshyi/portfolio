import React from "react";
import "../styles/Projects.css";
import Project from "./Project";
import projects from "../projects/projects.json";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-head">
        <h1>Projects</h1>
        <div className="underline" />
      </div>
      <div className="projects-container">
        {console.log(projects)}
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
