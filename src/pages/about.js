import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/pageHeading"
import data from "../../content/about.json"

const AboutPage = props => {
  return (
    <Layout location={props.location}>
      <SEO title={data.heading} />
      <div className="m-8 sm:m-auto max-w-xl sm:my-16">
        <PageHeading heading={data.heading} subheading={data.subheading} />
        <div
          className="py-6"
          dangerouslySetInnerHTML={{ __html: data.page_body }}
        />
      </div>
    </Layout>
  )
}

AboutPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default AboutPage
