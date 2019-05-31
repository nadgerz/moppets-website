import PropTypes from "prop-types"
import React from "react"
import { HiBubble } from "../assets/images/branding/svgs"
import "../assets/css/components/banner-region.scss"


const BannerRegion = ( { data } ) => (
  <div className="banner-region">
    
    <aside className="sidebar-left">
      {data.img}
    </aside>
    
    <div className="container-two-thirds-width">
      <p>
        {data.text}
      </p>
    </div>
  </div>
)

BannerRegion.propTypes = {
  img: PropTypes.element,
  text: PropTypes.string,
}

BannerRegion.defaultProps = {
  img: `component import failed`,
  text: `import failed`,
}

export default BannerRegion
