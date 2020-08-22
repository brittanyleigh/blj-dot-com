import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/pageHeading"
import FAQ from "../components/faq"
import data from "../../content/faqs.json"

const FAQPage = props => {
  const faqs = data.faqs
  const faqElements = []
  {
    faqs.forEach(faq => {
      faqElements.push(<FAQ question={faq.question} answer={faq.answer} />)
    })
  }

  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <div className="m-8 sm:m-auto max-w-xl sm:my-16">
        <PageHeading heading={data.heading} subheading={data.subheading} />
        {faqElements}
      </div>
    </Layout>
  )
}

FAQPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default FAQPage
