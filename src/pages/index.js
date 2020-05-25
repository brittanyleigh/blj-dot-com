import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import data from "../../content/homepage.json"
import { FaCode, FaExternalLinkAlt } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="grid grid--thirds grid--50">
      <div className="project grid" id="react">
        <div className="project__img project--bottom-auto">
          <Image filename="baseball-react.jpg" alt="react baseball project" />
        </div>
        <div className="project--bottom-auto">
          <h3 className="project__heading">MLB Team Stats App</h3>
          <p className="project__description flex">
            React & Redux web app for tracking your favorite MLB team's game
            details, standings, player stats, and recent news.
          </p>
        </div>
        <div className="project__buttons">
          <a
            className="button"
            href="https://github.com/brittanyleigh/baseball-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode /> View Code
          </a>
          <a
            className="button"
            href="http://baseball.brittanyisenberg.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> View Live
          </a>
        </div>
      </div>
      <div className="project grid" id="django">
        <div className="project__img project--bottom-auto">
          <Image filename="habits.jpg" alt="django habits" />
        </div>
        <div>
          <h3 className="project__heading">Essentials Habit Tracker</h3>
          <p className="project__description flex">
            Django web app for developing healthy, positive habits by tracking
            daily streaks for three personalized 'essentials'.
          </p>
        </div>
        <div className="project__buttons">
          <a
            className="button"
            href="https://github.com/brittanyleigh/habits"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode /> View Code
          </a>
          <a
            className="button"
            href="http://brittanyleigh.pythonanywhere.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> View Live
          </a>
        </div>
      </div>
      <div className="project grid" id="wordpress">
        <div className="project__img project--bottom-auto">
          <Image
            className="project__img"
            filename="ryp.jpg"
            alt="WordPress RYP site"
          />
        </div>
        <div>
          <h3 className="project__heading">Rochester Young Professionals</h3>
          <p className="project__description flex">
            Custom WordPress theme design and development for non-profit
            organization.
          </p>
        </div>
        <div className="project__buttons">
          <a
            className="button"
            href="https://github.com/brittanyleigh/ryp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode /> View Code
          </a>
          <a
            className="button"
            href="http://r-y-p.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt /> View Live
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
