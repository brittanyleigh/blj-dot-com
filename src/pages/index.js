import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import data from "../../content/homepage.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="grid grid--thirds">
      <div class="project" id="react">
        <Image className="project__img" image="baseball-react.jpg" />
        <h3 class="project__heading">MLB Team Stats App</h3>
        <p class="project__description flex">
          React & Redux web app for tracking your favorite MLB team's game
          details, standings, player stats, and recent news.
        </p>
        <div class="project__buttons">
          <a
            class="button"
            href="https://github.com/brittanyleigh/baseball-react"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <i class="fas fa-code"></i> View Code
          </a>
          <a
            class="button"
            href="http://baseball.brittanyisenberg.com/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <i class="fas fa-external-link-alt"></i> View Live
          </a>
        </div>
      </div>
      <div class="project" id="django">
        <img
          class="project__img"
          src="../images/habits.jpg"
          alt="screenshot of habits app homepage"
        />
        <h3 class="project__heading">Essentials Habit Tracker</h3>
        <p class="project__description flex">
          Django web app for developing healthy, positive habits by tracking
          daily streaks for three personalized 'essentials'.
        </p>
        <div class="project__buttons">
          <a
            class="button"
            href="https://github.com/brittanyleigh/habits"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <i class="fas fa-code"></i> View Code
          </a>
          <a
            class="button"
            href="http://brittanyleigh.pythonanywhere.com/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <i class="fas fa-external-link-alt"></i> View Live
          </a>
        </div>
      </div>
      <div class="project" id="wordpress">
        <img
          class="project__img"
          src="../images/ryp.jpg"
          alt="screenshot of Rochester Young Professionals website homepage"
        />
        <h3 class="project__heading">Rochester Young Professionals</h3>
        <p class="project__description flex">
          Custom WordPress theme design and development for non-profit
          organization.
        </p>
        <div class="project__buttons">
          <a
            class="button"
            href="https://github.com/brittanyleigh/ryp"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <i class="fas fa-code"></i> View Code
          </a>
          <a
            class="button"
            href="http://r-y-p.org/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <i class="fas fa-external-link-alt"></i> View Live
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
