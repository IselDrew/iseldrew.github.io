import React from "react"
import { skills } from "../data"

function Experiences() {
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
  ))
  return (
    <div className="experiences">
      <span className="paragraph-title">Experiences</span>
      <div className="experiences-content">
        <div className="career">
          <span className="career-title">Career</span>
        </div>
        <div className="experiences-hr"></div>
        <div className="skills-education">
          <div className="skills">
            <span className="skills-title">Skills</span>
            <div className="skills-elements">{skillsElements}</div>
          </div>
          <div className="education">
            <span className="education-title">Education</span>
          </div>
        </div>
      </div>
      {/* <input className="project-button" type="button" value="Download CV" /> */}
    </div>
  )
}

export default Experiences
