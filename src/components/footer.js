import React from "react"

const Footer = () => {
  return (
    <footer className="bg-brand">
      <div className="container m-auto">
        © {new Date().getFullYear()} Brittany Leigh Jewelry ||{" "}
        <a className="copyright__a" href="https://www.brittanyisenberg.com">
          Brittany Isenberg
        </a>
      </div>
    </footer>
  )
}

export default Footer
