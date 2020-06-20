/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/index.scss"

const Layout = ({ children, flex }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <main className={flex && "flex flex--center flex--column"}>
        {children}
      </main>
      <footer>
        <div className="desk">
          <img
            src={require("../images/desk.png")}
            alt="desktop scene with laptop and notebook"
          />
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Brittany Isenberg || Built with
          {` `}
          <a className="copyright__a" href="https://www.gatsbyjs.org">
            Gatsby
          </a>{" "}
          and{" "}
          <a href="https://forestry.io/" className="copyright__a">
            Forestry CMS
          </a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  flex: PropTypes.bool,
}

export default Layout
