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
          {project.tech.map(tech => (
            <li>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="description">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className="read-more">
          <a href="#">github</a>
          <a href="#">demo</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
