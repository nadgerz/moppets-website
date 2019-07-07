import PropTypes from "prop-types"
import React from "react"
import "../assets/css/components/banner-region.scss"


const BannerRegion = ( { data } ) => (
  <div className="banner-region">
    
    <aside className="sidebar-left">
      {data.img}
    </aside>
    
    <div className="container-two-thirds-width">
      {data.text}
    </div>
  </div>
)

BannerRegion.propTypes = {
  img: PropTypes.node,
  // img: PropTypes.element,
  text: PropTypes.node,
}

BannerRegion.defaultProps = {
  img: `component import failed`,
  text: `import failed`,
}

export default BannerRegion
