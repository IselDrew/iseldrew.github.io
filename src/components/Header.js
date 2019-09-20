import React from "react"
import GitHubIcon from "../svg/GitHubIcon"
import LinkedInIcon from "../svg/LinkedInIcon"

function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-line-start">Hello, I'm</span>
        <span className="header-line-name">Andrii Kyselov</span>
        <span className="header-line-title">FrontEnd Developer</span>
      </div>
      <div className="header-links">
        <a href="https://github.com/IselDrew">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}

export default Header
