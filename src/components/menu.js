import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Menu = () => (
  <nav id="nav">
    <div className="header-content">
      <div className={"nav-branding sidebar-left"}>
        <Link
          to="/about">
          {/*{siteTitle}*/}
        </Link>
        <Link
          to="/contact">
          {/*{siteTitle}*/}
        </Link>
      </div>
      
      <div className="container-full-width header-right" />
    
    </div>
  </nav>
)
//
// Menu.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Menu.defaultProps = {
//   siteTitle: `my site`,
// }

export default Menu
