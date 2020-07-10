import React from "react"
import PropTypes from "prop-types"

const ExternalLink = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="text-brand hover:text-brand-dark"
    >
      {props.label}
    </a>
  )
}

ExternalLink.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default ExternalLink
