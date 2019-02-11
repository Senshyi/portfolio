import React from "react";
import "../styles/Intro.css";
import cSharp from "../images/cSharp.png";
import cpp from "../images/cpp.png";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-class">
        <span className="code">
          <i className="fas fa-code" />
        </span>
        <h1>Jan Machacek</h1>
        <p>Software Developer</p>
      </div>
      <div className="icons">
        <div className="icon">
          <i className="fab fa-html5" />
          <span>HTML5</span>
        </div>
        <div className="icon">
          <i className="fab fa-js" />
          <span>JavaScript</span>
        </div>
        <div className="icon">
          <i className="fab fa-css3-alt" />
          <span>CSS</span>
        </div>
        <div className="icon">
          <i className="fas fa-database" />
          <span>PostgreSQL</span>
        </div>
        <div className="icon">
          <i className="fas fa-database" />
          <span>MongoDB</span>
        </div>
        <div className="icon">
          <i className="fas fa-server" />
          <span>Express</span>
        </div>
        <div className="icon">
          <img src={cSharp} alt="" />
          <span>C#</span>
        </div>
        <div className="icon">
          <img src={cpp} alt="" />
          <span>C++</span>
        </div>
        <div />
        <div className="icon">
          <i className="fab fa-node" />
          <span>Node.js</span>
        </div>
        <div className="icon">
          <i className="fab fa-react" />
          <span>React</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
