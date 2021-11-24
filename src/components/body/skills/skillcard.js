import React from "react";

export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <img src={skill.icon} alt={skill.name} />
      </div>
      <label className="skill-name">{skill.skillName}</label>
    </div>
  );
}
