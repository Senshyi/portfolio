import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1>CONTACT</h1>
      <div className="underline" />
      <h2>Get in touch with me!</h2>
      <ul>
        <li>
          <a
            href="https://github.com/JanMach97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jan-machacek-a10148164/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>
      </ul>
      <p>
        <span>E-mail</span>: janmachacek97@gmail.com
      </p>
    </section>
  );
};

export default Contact;
