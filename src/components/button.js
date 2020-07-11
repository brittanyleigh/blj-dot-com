import React from "react"
import PropTypes from "prop-types"

const Button = props => {
  const classes =
    "py-3 px-10 tracking-widest bg-brand rounded hover:bg-brand-dark hover:text-white transition ease-in duration-300 font-bold border-brand-dark border-2 border-t-0 border-l-0 whitespace-no-wrap"
  return props.external ? (
    <a target="_blank" rel="noreferrer" href={props.link} className={classes}>
      {props.label}
    </a>
  ) : (
    <button className={classes}>{props.label}</button>
  )
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
}

export default Button
