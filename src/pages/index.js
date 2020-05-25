import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import data from "../../content/homepage.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid grid--thirds grid--50">
      {data.projects.map(item => {
        return (
          <Project
            key={item.filename}
            filename={item.filename}
            alt={item.alt}
            heading={item.heading}
            description={item.description}
            code={item.code}
            live={item.live}
          ></Project>
        )
      })}
    </div>
  </Layout>
)

export default IndexPage
