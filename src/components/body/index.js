import React from "react";
import "./body.css";
import About from "./about";
import Skills from "./skills";
import Education from "./education";
import Contact from "./contact";
import Work from "./work";

export default function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
