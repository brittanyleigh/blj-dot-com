import React, { useState } from "react"
import PropTypes from "prop-types"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const FAQ = ({ question, answer }) => {
  const [expanded, toggle] = useState(false)
  return (
    <div className="py-1">
      <p
        className="uppercase flex justify-between p-3 bg-brand-light items-center cursor-pointer hover:bg-brand transition ease-in duration-300"
        onClick={() => toggle(prevState => !prevState)}
      >
        {question}
        <span>{expanded ? <FaChevronUp /> : <FaChevronDown />}</span>
      </p>
      {expanded && <p className="pt-2 pb-4">{answer}</p>}
    </div>
  )
}

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

export default FAQ
