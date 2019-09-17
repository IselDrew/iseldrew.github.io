import React from "react"

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-line-start">Hello, I'm</span>
        <span className="header-line-name">Andrii Kyselov</span>
        <span className="header-line-title">FrontEnd Developer</span>
      </div>
      <div className="header-links">
        <a href="https://github.com/">GH</a>
        <br />
        <a href="https://www.linkedin.com/">in</a>
      </div>
    </div>
  )
}

export default Header
