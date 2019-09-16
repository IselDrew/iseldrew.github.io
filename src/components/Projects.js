import React from "react"
import { projects } from '../data'

function Projects() {
  const projectElements = projects.map(item => (
    <div className="project-element" key={item.id}>
      <img src={item.img} alt="name"></img>
      <br />
      <span className="project-name">{item.name}</span>
    </div>
  ))
  return (
    <div>
      <span className="projects-title">Projects</span>
      <br />
      <div>{projectElements}</div>
      <input type="button" value="Load More Work" />
    </div>
  )
}

export default Projects
