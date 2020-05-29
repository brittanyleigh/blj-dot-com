import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import About from "../components/about"
import data from "../../content/homepage.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid grid--thirds grid--50">
      {data.projects.map(item => {
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
    <div class="secondary grid grid--halves">
      <About />
      <div class="secondary__section" id="contact">
        <h2 class="secondary__heading">Get In Touch</h2>
        <form
          action="https://formspree.io/brittany.isenberg@gmail.com"
          method="POST"
          class="secondary__form"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            class="secondary__input secondary__input--small"
            required
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Email"
            class="secondary__input secondary__input--small"
            required
          />
          <br />
          <textarea
            name="message"
            placeholder="Your Message"
            class="secondary__input secondary__input--large secondary__textarea"
            rows="6"
            required
          ></textarea>
          <br />
          <input type="submit" value="Send" class="button" />
          <input
            type="hidden"
            name="_next"
            value="https://www.brittanyisenberg.com/"
          />
        </form>
      </div>
    </div>
    <div class="desk">
      <img
        src={require("../images/desk.png")}
        alt="desktop scene with laptop and notebook"
      />
    </div>
  </Layout>
)

export default IndexPage
