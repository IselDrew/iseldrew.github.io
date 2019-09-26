import React from "react"
import { projects } from "../data"

const projectElements = projects.map(item => (
  <div className="project-element" key={item.id}>
    <div className="project-image-container">
      <img src={item.img} alt="name" className="project-image"></img>
      <div className="projects-links">
        <a href={item.githubLink} className="projects-links-github">
          Github
        </a>
        <div className="projects-links-hr"></div>
        <a href={item.demoLink} className="projects-links-check">
          Demo
        </a>
      </div>
    </div>
    <div className="project-element-text">
      <span className="project-name">{item.name}</span>
      <span className="project-year">{item.year}</span>
    </div>
  </div>
))

function Projects() {
  return (
    <div className="projects">
      <span className="paragraph-title">Projects</span>
      <div className="projects-bar">{projectElements}</div>
      {/* <input className="project-button" type="button" value="Load More Work" /> */}
    </div>
  )
}

export default Projects
