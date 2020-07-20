import React from "react"
import PropTypes from "prop-types"
import Button from "./button"
import Etsy from "./etsy"

const EtsyButton = props => {
  return (
    <Button
      external={true}
      link={props.link}
      full={props.full}
      color="light"
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
  full: PropTypes.bool,
}

export default EtsyButton
