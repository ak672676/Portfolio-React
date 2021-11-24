import React from "react";
import "./education-card.css";
import Fade from "react-reveal/Fade";

export default function EducationCard({ education }) {
  return (
    <Fade left>
      <div className="education-card">
        <div className="education-info">
          <label className="education-degree">{education.degree} in</label>
          <p className="education-major">
            {education.major} {"from"}
          </p>
          <p className="education-school">
            {education.school},{" "}
            <span style={{ color: "black", fontSize: "16px" }}>
              {education.place}
            </span>
          </p>
          <p className="education-batch">
            Batch : {education.start} - {education.end}
          </p>
        </div>
      </div>
    </Fade>
  );
}
