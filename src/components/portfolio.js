// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import screenPDF from "../assets/pdf/2019_Portfolio_ScreenUiDesign.pdf"
import illustrationPDF from "../assets/pdf/2019_Portfolio_illustration.pdf"
import infographicsPDF from "../assets/pdf/2019_Portfolio_Infographics.pdf"
import "../assets/css/components/portfolio.scss"


const Portfolio = ( {} ) => (
  <>
    <section className="recent-work">
      <aside className="sidebar-left">
        <h2>Recent Work</h2>
      </aside>
      
      <div className="container-half-width">
        <ul className="clients">
          <li><a href="https://www.neumann-hug.com">Neumann Hug Collection</a></li>
          <li><a href="https://www.moerbeck.de">Kevin van Moerbeck</a></li>
        </ul>
      </div>
    </section>
    
    <section className={"portfolios"}>
      <aside className="sidebar-left">
        <h2>Port-folio</h2>
      </aside>
      
      <div className="container">
        <div className="container-third-width download-button">
          <a className="download-portfolio"
             href={screenPDF}
             download={`KerstinDengl_ScreenUiPortfolio`}>
            <h3>Screen/UI Design</h3>
            DOWNLOAD PORTFOLIO
          </a>
        </div>
        
        <div className="container-third-width download-button">
          <a className="download-portfolio"
             href={illustrationPDF}
             download={`KerstinDengl_IllustrationPortfolio`}>
            <h3>Illustration</h3>
            DOWNLOAD PORTFOLIO
          </a>
        </div>
        
        <div className="container-third-width download-button">
          <a className="download-portfolio"
             href={infographicsPDF}
             download={`KerstinDengl_InfographicsPortfolio`}>
            <h3>Infographics</h3>
            DOWNLOAD PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  </>
)

// Portfolio.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Portfolio.defaultProps = {
//   siteTitle: `my site`,
// }

export default Portfolio
