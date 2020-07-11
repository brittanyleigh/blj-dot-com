import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Form from "../components/form"
import SEO from "../components/seo"

const ContactPage = props => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <div className="m-8 sm:m-auto max-w-xl sm:my-16">
      <Form />
    </div>
  </Layout>
)

ContactPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default ContactPage
