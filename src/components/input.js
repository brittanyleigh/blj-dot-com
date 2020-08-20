import React from "react"
import PropTypes from "prop-types"

const Input = props => {
  const { type, name, value, label, onChange, required } = props
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="p-2 border w-full my-3 sm:m-3 sm:w-auto"
      aria-label={label}
      placeholder={label}
      onChange={onChange}
      required={required}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
}

export default Input
