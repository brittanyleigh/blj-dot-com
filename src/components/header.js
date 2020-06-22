/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = ({ location = {} }) => {
  const pages = useStaticQuery(graphql`
    query GetPages {
      allSitePage(filter: { path: { regex: "/^((?!404).)*$/" } }) {
        distinct(field: path)
      }
    }
  `)

  const links = []
  const { pathname } = location
  pages.allSitePage.distinct.map(page => {
    const link = page.replace(/\//g, "")
    links.push(
      <Link key={page} to={page}>
        <li
          className={`uppercase p-3 tracking-wider hover:text-brand ${
            pathname === page && "text-brand"
          }`}
        >
          {link || "Home"}
        </li>
      </Link>
    )
  })

  return (
    <header className="bg-white border-b">
      <div className="flex justify-between items-center container m-auto">
        <div className="max-w-sm p-5">
          <Link className="" to="/">
            <img
              className="max-w-sm"
              src={require("../images/blj-logo.png")}
              alt="brittany leigh jewelry logo"
            />
          </Link>
        </div>

        <nav>
          <ul className="flex p-5">{links}</ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
