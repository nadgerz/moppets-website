// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import "../assets/css/components/portfolio.scss"


const Portfolio = ( {} ) => (
  <section className="recent-work">
    <aside className="sidebar-left">
      <h2 className="work">Recent Work</h2>
    </aside>
    
    <div className="container">
      <div className="container-half-width">
        <ul className="clients">
          <li><a href="https://www.neumann-hug.com">Neumann Hug Collection</a></li>
          <li><a href="https://www.moerbeck.de">Kevin van Moerbeck</a></li>
        </ul>
      </div>
      
      <div className="container-half-width download">
        <div className="download-portfolio">
          <a href="#">
            <h2>Portfolio</h2>
            DOWNLOAD
          </a>
        </div>
        {/*<a href="#">DOWNLOAD</a>*/}
      </div>
    </div>
  </section>
)

// Portfolio.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Portfolio.defaultProps = {
//   siteTitle: `my site`,
// }

export default Portfolio
