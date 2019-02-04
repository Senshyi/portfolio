import React from "react";
import "../styles/Project.css";

const Project = props => {
  const { project } = props;
  const img = require(`../images/${project.img}`);
  return (
    <div className="project">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${img})` }} />
        <ul className="details">
          <li className="tech">
            <i className="fas fa-code" />
            Tech used
          </li>
          {project.tech.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="description">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className="read-more">
          {project.github.length !== 0 ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              github
            </a>
          ) : (
            <span> </span>
          )}
          {project.demo.length !== 0 ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              demo
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
