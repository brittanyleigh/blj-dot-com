import React from "react"
import PropTypes from "prop-types"
import Button from "./button"
import Etsy from "./etsy"

const EtsyButton = props => {
  return (
    <Button
      link={props.link}
      label={
        <React.Fragment>
          Buy on <Etsy />
        </React.Fragment>
      }
    />
  )
}

EtsyButton.propTypes = {
  link: PropTypes.string.isRequired,
}

export default EtsyButton
