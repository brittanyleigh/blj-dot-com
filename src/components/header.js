/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ location = {}, pages }) => {
  const links = []
  const { pathname } = location
  pages.map(page => {
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
        <div className="max-w-xs p-5">
          <Link className="" to="/">
            <img
              className="max-w-xs"
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
  location: PropTypes.object,
  pages: PropTypes.array.isRequired,
}

export default Header
