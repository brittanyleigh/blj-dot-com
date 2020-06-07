import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import About from "../components/about"
import Contact from "../components/contact"
import data from "../../content/homepage.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid grid--thirds grid--50">
      {data.projects.map((item) => {
        return (
          <Project
            key={item.image}
            image={item.image}
            alt={item.alt}
            title={item.title}
            description={item.description}
            code={item.code}
            live={item.live}
          ></Project>
        )
      })}
    </div>
    <div className="secondary grid grid--halves">
      <About places={data.places} facts={data.facts} />
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
