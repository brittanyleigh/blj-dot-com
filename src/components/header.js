import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  FaReact,
  FaPython,
  FaWordpressSimple,
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
      <Link
        class="links__a hidden-large"
        to="#react"
        aria-label="React Project"
      >
        <FaReact />
      </Link>
      <Link
        class="links__a hidden-large"
        to="#django"
        aria-label="Django Project"
      >
        <FaPython />
      </Link>
      <Link
        class="links__a hidden-large"
        to="#wordpress"
        aria-label="WordPress Project"
      >
        <FaWordpressSimple />
      </Link>
      <hr class="links__hr hidden-large" />
      <Link class="links__a" to="#about" aria-label="About">
        <FaUserCircle />
      </Link>
      <Link class="links__a" to="#contact" aria-label="Contact">
        <FaPaperPlane />
      </Link>
      <Link
        class="links__a"
        to="https://www.linkedin.com/in/brittanyisenberg/"
        target="_blank"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        class="links__a"
        to="https://github.com/brittanyleigh"
        target="_blank"
        aria-label="GitHub Profile"
      >
        <FaGithub />
      </Link>
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
