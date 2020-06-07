import React from "react"
import PropTypes from "prop-types"

import { FaCaretRight, FaArrowRight } from "react-icons/fa"

const About = (props) => (
  <div className="secondary__section" id="about">
    <h2 className="secondary__heading">About Me</h2>
    <p className="secondary__p">
      {props.places.map((item, index) => {
        return (
          <span key={item.place}>
            {index === 0 ? (
              <FaCaretRight className="secondary__i" />
            ) : (
              <FaArrowRight className="secondary__i" />
            )}{" "}
            {item.place}
          </span>
        )
      })}
    </p>
    {props.facts.map((item) => {
      return (
        <p className="secondary__p" key={item.fact}>
          <FaCaretRight className="secondary__i" /> {item.fact}
        </p>
      )
    })}
  </div>
)

About.propTypes = {
  places: PropTypes.object.isRequired,
  facts: PropTypes.object.isRequired,
}

export default About
