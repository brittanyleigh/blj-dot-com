/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const pages = useStaticQuery(graphql`
    query GetPages {
      allSitePage(filter: { path: { regex: "/^((?!404).)*$/" } }) {
        distinct(field: path)
      }
    }
  `)

  const links = []
  pages.allSitePage.distinct.map(page => {
    const link = page.replace(/\//g, "")
    links.push(
      <Link key={page} to={page}>
        <li className="uppercase p-3">{link || "Home"}</li>
      </Link>
    )
  })

  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="max-w-md p-5">
          <Link className="" to="/">
            <img
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

export default Header
