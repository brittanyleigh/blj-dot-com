/* eslint-disable global-require */
/* eslint-disable no-undef */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  FaHome,
  FaPaperPlane,
  FaQuestionCircle,
  FaStar,
  FaFemale,
  FaLink,
} from "react-icons/fa"

const Header = ({ location = {}, pages }) => {
  const links = []
  const { pathname } = location
  pages.map(page => {
    const link = page.replace(/\//g, "")
    links.push(
      <Link key={page} to={page}>
        <li
          className={`uppercase p-3 tracking-wider hover:text-brand text-sm ${
            pathname === page && "text-brand"
          }`}
        >
          {link || "Home"}
        </li>
      </Link>
    )
  })

  const mobileLinks = []
  const icons = {
    home: <FaHome />,
    about: <FaFemale />,
    contact: <FaPaperPlane />,
    faq: <FaQuestionCircle />,
    reviews: <FaStar />,
    default: <FaLink />,
  }
  pages.map(page => {
    const link = page.replace(/\//g, "")
    mobileLinks.push(
      <li className="uppercase tracking-wider flex-grow" key={page}>
        <Link to={page}>
          <div className="p-3 text-brand-dark text-center flex items-center flex-col">
            <span className="text-gray-900 text-2xl pb-2">
              {link === "" ? icons.home : icons[link] || icons.default}
            </span>
            <span className="text-xs">{link || "Home"}</span>
          </div>
        </Link>
      </li>
    )
  })

  return (
    <header className="bg-white border-b">
      <div className="flex justify-between items-center container m-auto">
        <div className="max-w-xs p-5 m-auto sm:m-0">
          <Link className="" to="/">
            <img
              src={require("../images/blj-logo.png")}
              alt="brittany leigh jewelry logo"
            />
          </Link>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex p-5">{links}</ul>
        </nav>
        <nav className="absolute w-full bottom-0 bg-brand sm:hidden">
          <ul className="flex justify-center items-center h-20">
            {mobileLinks}
          </ul>
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
