import React from "react";
import "./work-card.css";
import Fade from "react-reveal/Fade";

export default function WorkCard({ item }) {
  return (
    <Fade right>
      <div className="work-card">
        <img src={item.logo} alt={item.company} className="work-logo" />
        <div className="work-info">
          <label className="work-name">{item.company}</label>
          <div className="work-date">
            <label>{item.start}</label> - <label>{item.end}</label>
          </div>
          <div className="work-designations">
            {item.designation.map((desig) => {
              return (
                <div className="work-desgination">
                  <label className="work-title">As a {desig.title}</label>
                  <div className="work-projects">
                    {desig.projects.map((project) => {
                      return (
                        <div className="work-project">
                          <label className="work-projectname">
                            {project.projectName}
                          </label>
                          <div className="work-project-date">
                            <label>{project.start}</label> -{" "}
                            <label>{project.end}</label>
                          </div>
                          <p className="work-project-description">
                            {project.description}
                          </p>
                          {/* <div className="work-project-tech">
                          {project.tech.map((tech) => {
                            return (
                              <div>
                                <label>{tech}</label>
                              </div>
                            );
                          })}
                        </div> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
