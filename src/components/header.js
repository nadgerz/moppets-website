// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu.js"
import {Logo} from "../assets/images/branding/svgs.js"

import "../assets/css/components/header.scss"

const Header = ({ siteTitle }) => (
  <header id={'header'}>
    <div className="header-content">
      <div className={"nav-branding sidebar-left"}>
        <h1>{siteTitle}</h1>
        
        <Menu />
        <Logo />
        
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
