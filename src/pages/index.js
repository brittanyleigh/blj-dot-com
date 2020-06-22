import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../../content/homepage.json"

const IndexPage = props => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <div className="grid grid--thirds grid--50">
      <p>Hello World</p>
    </div>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
