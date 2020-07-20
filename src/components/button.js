import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = props => {
  let colors
  switch (props.color) {
    case "dark":
      colors =
        "border bg-brand-dark border-brand hover:bg-brand text-white hover:text-black"
      break
    case "light":
      colors = "border bg-brand-light border-brand hover:bg-brand"
      break
    case "lightest":
      colors =
        "border bg-brand-lightest border-brand-light hover:bg-brand-light"
      break
    case "transparent":
      colors = "hover:text-brand"
      break
    default:
      colors =
        "border bg-brand border-brand-dark hover:bg-brand-dark hover:text-white"
  }
  const classes = `py-3 px-8 text-sm tracking-widest transition ease-in duration-300 font-bold whitespace-no-wrap ${
    props.full ? "block" : ""
  } ${colors}`
  return props.external ? (
    <a target="_blank" rel="noreferrer" href={props.link} className={classes}>
      {props.label}
    </a>
  ) : (
    <Link to={props.link} className={classes}>
      {props.label}
    </Link>
  )
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
  full: PropTypes.bool,
  color: PropTypes.string.isRequired,
}

export default Button
