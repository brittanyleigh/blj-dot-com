import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout flex={true}>
    <SEO title="404: Not found" />
    <div className="flex flex--column flex--center box">
      <h1>Not Found</h1>
      <p>Oops, this page doesn&#39;t exist!</p>
      <Link className="button" to="/">
        Go Home
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
