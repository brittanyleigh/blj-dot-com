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
  const classes = `w-full sm:w-auto py-2 px-8 text-sm tracking-widest transition ease-in duration-300 font-bold whitespace-no-wrap ${
    props.full ? "block" : ""
  } ${colors}`

  let button
  switch (props.type) {
    case "external":
      button = (
        <a
          target="_blank"
          rel="noreferrer"
          href={props.link}
          className={classes}
        >
          {props.label}
        </a>
      )
      break
    case "submit":
      button = (
        <button type="submit" className={classes}>
          <span className="flex items-center">{props.label}</span>
        </button>
      )
      break
    default:
      button = (
        <Link to={props.link} className={classes}>
          {props.label}
        </Link>
      )
  }
  return button
}

Button.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  full: PropTypes.bool,
  color: PropTypes.string.isRequired,
}

export default Button
