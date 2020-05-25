import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  FaUserCircle,
  FaPaperPlane,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header role="banner" class="header">
    <div class="title">
      <h1 class="title__h1">Brittany Isenberg</h1>
      <h4 class="title__sub">Web Developer & Designer</h4>
    </div>
    <nav class="links">
      <Link class="links__a" to="#about" aria-label="About">
        <FaUserCircle />
      </Link>
      <Link class="links__a" to="#contact" aria-label="Contact">
        <FaPaperPlane />
      </Link>
      <a
        class="links__a"
        to="https://www.linkedin.com/in/brittanyisenberg/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedinIn />
      </a>
      <a
        class="links__a"
        to="https://github.com/brittanyleigh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
