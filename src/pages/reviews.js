import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ReviewPage = props => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <div className="grid grid--thirds grid--50">
      <p>Reviews</p>
    </div>
  </Layout>
)

ReviewPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default ReviewPage
