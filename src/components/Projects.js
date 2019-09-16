import React from "react"
import { projects } from "../data"

function Projects() {
  const projectElements = projects.map(item => (
    <div className="project-element" key={item.id}>
      <div className="project-image">
        <img src={item.img} alt="name"></img>
      </div>
      <div className="project-element-text">
        <span className="project-name">{item.name}</span>
        <span className="project-year">{item.year}</span>
      </div>
    </div>
  ))
  return (
    <div className="projects">
      <span className="projects-title">Projects</span>
      <div className="projects-bar">{projectElements}</div>
      <input className="project-button" type="button" value="Load More Work" />
    </div>
  )
}

export default Projects
