import React from "react";
import "../styles/Intro.css";
import cSharp from "../images/cSharp.png";
import cpp from "../images/cpp.png";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-class">
        <span>
          <i className="fas fa-code" />
        </span>
        <h1>Jan Machacek</h1>
        <p>Full stack Developer</p>
      </div>
      <div className="icons">
        <div>
          <i class="fab fa-html5" />
          <span>HTML5</span>
        </div>
        <div>
          <i class="fab fa-js" />
          <span>JavaScript</span>
        </div>
        <div>
          <i class="fab fa-css3-alt" />
          <span>CSS</span>
        </div>
        <div>
          <i class="fas fa-database" />
          <span>PostgreSQL</span>
        </div>
        <div>
          <i class="fas fa-database" />
          <span>MongoDB</span>
        </div>
        <div>
          <i class="fas fa-server" />
          <span>Express</span>
        </div>
        <div>
          <img src={cSharp} alt="" />
          <span>.NET</span>
        </div>
        <div>
          <img src={cpp} alt="" />
          <span>C++</span>
        </div>

        <i class="fab fa-node" />
        <i class="fab fa-react" />
      </div>
    </section>
  );
};

export default Intro;
