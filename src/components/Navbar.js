import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = _ => {
  let navClasses = "nav-links"
  let navItemClasses = "nav-link-item"

  return (
    <header>
      <nav className="navbar">
        <div className="nav-belt">
          <div></div>
          <ul className={navClasses}>
            <li className={navItemClasses}>
              <Link activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li className={navItemClasses}>
              <Link activeClassName="active" to="/projects">
                Projects
              </Link>
            </li>
            <li className={navItemClasses}>
              <Link activeClassName="active" to="/about">
                About
              </Link>
            </li>
            <li className={navItemClasses}>
              <Link activeClassName="active" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
