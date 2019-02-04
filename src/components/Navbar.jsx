import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1 onClick={scroll.scrollToTop}>JM</h1>
        <ul className="navbar-list">
          <li>
            <Link
              activeClass="active"
              to="Idabout"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
