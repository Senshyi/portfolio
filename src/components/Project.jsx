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
          <li className="tech">tech</li>
          <li>test</li>
          <li>test2</li>
        </ul>
      </div>
      <div className="description">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
