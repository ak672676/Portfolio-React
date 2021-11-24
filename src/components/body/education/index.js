import React from "react";
import Seperator from "../../common/seperator";
import { EducationData } from "../../data/education";
import EducationCard from "./education-card";
import Fade from "react-reveal/Fade";

import "./education.css";
export default function Education() {
  const data = EducationData;
  return (
    <div className="education">
      <Seperator />
      <label className="section-title">Education</label>

      <div className="education-block">
        <div>
          {data.map((edu) => {
            return <EducationCard education={edu} />;
          })}
        </div>
        <Fade right>
          <img
            src={require("../../../assets/education.png").default}
            alt="education"
            className="education-image"
          />
        </Fade>
      </div>
    </div>
  );
}
