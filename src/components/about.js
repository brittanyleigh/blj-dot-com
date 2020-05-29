import React from "react"

import { FaCaretRight, FaArrowRight } from "react-icons/fa"

const About = props => (
  <div class="secondary__section" id="about">
    <h2 class="secondary__heading">About Me</h2>
    <p class="secondary__p">
      {props.places.map((item, index) => {
        return (
          <span>
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
    {props.facts.map(item => {
      return (
        <p class="secondary__p">
          <FaCaretRight className="secondary__i" /> {item.fact}
        </p>
      )
    })}
  </div>
)

export default About
