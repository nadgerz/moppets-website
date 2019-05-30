import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu.js"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-content">
      <div className={"nav-branding sidebar-left"}>
        <h1>{siteTitle}</h1>
        <Menu />
      </div>
      
      <div className="container-full-width header-right" />
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `my site`,
}

export default Header
