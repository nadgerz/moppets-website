import { Link } from 'gatsby'
// import PropTypes from "prop-types"
import React from 'react'
import '../assets/css/components/menu.scss'

const Menu = () => (
  <nav id="nav">
    <div className="header-content">
      <input type="checkbox" id="menu-checkbox" />
      <label htmlFor="menu-checkbox">
        <ul id="main-menu" className="menu menu-on menu-off">
          <li>
            <Link to="/" activeClassName={'active-Link'}>
              Work
              {/*{siteTitle}*/}
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={'active-Link'}>
              About
              {/*{siteTitle}*/}
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={'active-Link'}>
              Contact
              {/*{siteTitle}*/}
            </Link>
          </li>
        </ul>
        <div className="burger-menu burger-menu-close">
          <span />
          <span />
          <span />
        </div>
      </label>
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
