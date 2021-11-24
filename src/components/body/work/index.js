import React from "react";
import "./work.css";
import Seperator from "../../common/seperator";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";

export default function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Seperator />
      <label className="section-title">Experience</label>
      <div className="work-list">
        {data.map((item) => (
          <WorkCard item={item} />
        ))}
      </div>
    </div>
  );
}
