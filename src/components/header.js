import React from "react"
import {
  FaUserCircle,
  FaPaperPlane,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"

const Header = () => (
  <header role="banner" className="header">
    <div className="title">
      <h1 className="title__h1">Brittany Isenberg</h1>
      <h4 className="title__sub">Web Developer & Designer</h4>
    </div>
    <nav className="links">
      <a className="links__a" href="#about" aria-label="About">
        <FaUserCircle />
      </a>
      <a className="links__a" href="#contact" aria-label="Contact">
        <FaPaperPlane />
      </a>
      <a
        className="links__a"
        href="https://www.linkedin.com/in/brittanyisenberg/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedinIn />
      </a>
      <a
        className="links__a"
        href="https://github.com/brittanyleigh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </a>
    </nav>
  </header>
)

export default Header
