import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaFacebookF, FaPinterestP, FaInstagram, FaEtsy } from "react-icons/fa"

const Footer = ({ pages }) => {
  const links = []
  pages.map((page, index) => {
    const link = page.replace(/\//g, "")
    links.push(
      <li className="uppercase tracking-wider py-2" key={page}>
        <Link to={page}>
          {index !== 0 && "∙"}
          <span className="px-3 text-brand-dark hover:text-gray-900">
            {link || "Home"}
          </span>
        </Link>
      </li>
    )
  })

  const socialLinks = []
  const social = [
    {
      link: "https://facebook.com/brittanyleighjewelry",
      icon: <FaFacebookF />,
    },
    {
      link: "https://pinterest.com/bleighjewelry",
      icon: <FaPinterestP />,
    },
    {
      link: "https://instagram.com/brittanyleighjewelry",
      icon: <FaInstagram />,
    },
    {
      link: "https://www.etsy.com/shop/brittanyleighjewelry",
      icon: <FaEtsy />,
    },
  ]
  social.map(link => {
    socialLinks.push(
      <a
        key={link.link}
        href={link.link}
        target="_blank"
        rel="noreferrer"
        className="hover:text-brand-dark px-2"
      >
        {link.icon}
      </a>
    )
  })

  return (
    <footer className="bg-brand">
      <div className="container m-auto mb-20 sm:mb-0 border-b sm:border-b-0 border-brand-dark">
        <div className="flex justify-center text-2xl p-3 text-gray-900">
          {socialLinks}
        </div>
        <div className="hidden sm:block">
          <ul className="flex justify-center text-xs">{links}</ul>
        </div>
        <div className="text-sm text-center p-2">
          © {new Date().getFullYear()} Brittany Leigh Jewelry ∙{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="text-brand-dark border-b border-brand-dark hover:text-gray-900"
            href="https://www.brittanyisenberg.com"
          >
            Brittany Isenberg
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default Footer
