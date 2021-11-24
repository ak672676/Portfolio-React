import React from "react";

import "./skills.css";
import "./skill-card.css";
import Seperator from "../../common/seperator";
import SkillCard from "./skillcard";

import { SkilData } from "../../data/skills";
import Fade from "react-reveal/Fade";

export default function Skills() {
  return (
    <Fade right>
      <div className="skills">
        <Seperator />
        <label className="section-title">Skills</label>
        <div className="skills-container">
          {SkilData.map((item) => {
            return (
              <div className="skills-section">
                <label className="skills-section-title">{item.skillType}</label>
                <div className="skills-list">
                  {item.skills.map((skill) => {
                    return <SkillCard skill={skill} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
