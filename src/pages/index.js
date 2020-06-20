import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../../content/homepage.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid grid--thirds grid--50">
      <p>Hello World</p>
    </div>
  </Layout>
)

export default IndexPage
