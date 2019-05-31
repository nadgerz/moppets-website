import PropTypes from "prop-types"
import React from "react"
import {HiBubble} from "../assets/images/branding/svgs"
import "../assets/css/components/banner-region.scss"


const BannerRegion = ( { img } ) => (
  <div className="banner-region">
    
    <aside className="sidebar-left">
      <HiBubble className={".svg-hiBubble "}/>
    </aside>
    
    <div className="container-two-thirds-width">
      <p className="text-copy">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quat. luptatum zzril
        delenit
        augue duis dolore te feugait nulla facilisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
        ut
        laoreet dolore magna aliquam erat volutpat.
      </p>
    </div>
  </div>
)

BannerRegion.propTypes = {
  img: PropTypes.string,
}

BannerRegion.defaultProps = {
  img: `an image`,
}

export default BannerRegion
