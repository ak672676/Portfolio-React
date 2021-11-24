import React from "react";
import SocialContact from "../../common/social-contact";
import Flip from "react-reveal/Flip";
import Typical from "react-typical";

import "./about.css";
export default function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          {/* <img
          src={require("../../../assets/amit.png").default}
          alt="amit"
        /> */}
          Hello There ✋, I am <br />
          <span className="info-name">Amit</span>.
          <br />I love experimenting with <br />
          new technologies and building things.
        </div>
        <div className="about-photo">
          <Flip left>
            <img
              src={require("../../../assets/amit.png").default}
              alt="coding"
              className="picture"
            />
          </Flip>
          <p
            style={{
              color: "#f1b900",
              fontWeight: "bold",
              height: "20px",
              fontSize: "30px",
              textAlign: "center",
              marginTop: "-60px",
            }}
          >
            <Typical
              steps={[
                "# Code 💻",
                1500,
                "# Eat 🍕",
                1500,
                "# Sleep 😴",
                1500,
                "Repeat",
                1000,
              ]}
              loop={Infinity}
            />
          </p>
        </div>
      </div>
      {/* <div className="about-bottom"></div> */}
      <SocialContact />
    </div>
  );
}
