import React from "react"
import PropTypes from "prop-types"

const PageHeading = ({ heading, subheading }) => {
  return (
    <div className="sm:col-span-3 text-center mt-8 sm:mt-16 text-brand-charcoal border-b pb-6 mx-3">
      <h1 className="text-3xl sm:text-5xl white-oleander">{heading}</h1>
      {subheading && (
        <h2 className="uppercase tracking-widest text-sm sm:text-base">
          {subheading}
        </h2>
      )}
    </div>
  )
}

PageHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
}

export default PageHeading
