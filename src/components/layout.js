/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"

import "../styles/index.scss"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allSitePage(filter: { path: { regex: "/^((?!404)(?!shop).)*$/" } }) {
        distinct(field: path)
      }
    }
  `)

  const pages = data.allSitePage.distinct

  return (
    <div className="texture-bg min-h-screen flex flex-col">
      <Header location={location} pages={pages} />
      <main className="container m-auto">{children}</main>
      <Footer pages={pages} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default Layout
