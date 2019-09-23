import React from "react";
import { skills, degrees, languages } from "../data";

const skillsElements = skills.map(item => (
  <div className="skill-line" key={item.id}>
    <div className="skill-name">
      <span>{item.name}</span>
    </div>

    <div className="skill-bar-container">
      <div className="skill-bar">
        <div style={{ width: item.percent }} className="skill-level"></div>
      </div>
    </div>
  </div>
));
const languagesElements = languages.map(item => (
  <div className="skill-line" key={item.id}>
    <div className="skill-name">
      <span>{item.name}</span>
    </div>

    <div className="skill-bar-container">
      <div className="skill-bar">
        <div style={{ width: item.percent }} className="skill-level"></div>
      </div>
    </div>
  </div>
));

const degreesElements = degrees.map(item => (
  <div className="universities" key={item.id}>
    <span className="university-years">{item.years}</span>
    <span className="university-speciality">{item.speciality}</span>
    <span className="university-name">{item.university}</span>
  </div>
));

function Experiences() {
  return (
    <div className="experiences">
      <span className="paragraph-title">Experiences</span>
      <div className="experiences-content">
        <div className="career">
          <span className="experiences-paragraph-title">Career</span>
          <div>null, yet :(</div>
        </div>
        <div className="experiences-hr"></div>
        <div className="skills-education">
          <div className="skills">
            <span className="experiences-paragraph-title">Skills</span>
            {skillsElements}
          </div>
          {/* <div className="languages">
            <span className="experiences-paragraph-title">Languages</span>
            {languagesElements}
          </div> */}
          <div className="education">
            <span className="experiences-paragraph-title">Education</span>
            {degreesElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
