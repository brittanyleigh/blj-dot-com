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
import Etsy from "./etsy"

const Header = ({ location = {}, pages }) => {
  const links = []
  const { pathname } = location
  pages.map(page => {
    const link = page.replace(/\//g, "")
    links.push(
      <Link key={page} to={page}>
        <li
          className={`uppercase p-3 tracking-wider hover:text-brand text-sm text-center ${
            pathname === page && "text-brand"
          }`}
        >
          {link || "Home"}
        </li>
      </Link>
    )
  })
  links.push(
    <a
      href="https://www.etsy.com/shop/BrittanyLeighJewelry"
      target="_blank"
      rel="noreferrer"
      key="etsy"
    >
      <li className="uppercase p-3 tracking-wider hover:text-brand text-sm text-center">
        Shop on <Etsy />
      </li>
    </a>
  )

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
    <header className=" border-b texture-bg">
      <div className="flex justify-between items-center container m-auto flex-column sm:flex-row flex-wrap sm:flex-no-wrap">
        <div className="max-w-xs p-5 m-auto sm:m-0">
          <Link className="" to="/">
            <img
              src={require("../images/blj-logo.png")}
              alt="brittany leigh jewelry logo"
            />
          </Link>
        </div>

        <nav className="hidden sm:block ml-auto">
          <ul className="flex p-5 items-center">{links}</ul>
        </nav>
        <nav className="fixed w-full bottom-0 bg-brand sm:hidden z-50">
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
