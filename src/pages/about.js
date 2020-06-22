import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = props => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <div className="grid grid--thirds grid--50">
      <p>Abouts</p>
    </div>
  </Layout>
)

AboutPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default AboutPage
