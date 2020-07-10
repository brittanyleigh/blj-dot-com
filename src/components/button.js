import React from "react"
import PropTypes from "prop-types"

const Button = props => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={props.link}
      className="py-3 px-10 tracking-widest bg-brand rounded-lg hover:bg-brand-dark hover:text-white transition ease-in duration-300 font-bold uppercase border-brand-dark border-2 border-t-0 border-l-0 whitespace-no-wrap"
    >
      {props.label}
    </a>
  )
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Button
