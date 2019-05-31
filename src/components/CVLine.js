// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../assets/css/components/CVLine.scss"


const CVLine = ( { data } ) => (
  <div className="CVLine-content">
    
    {/* T I M E & place */}
    <div className={"container-one-sixth-width"}>
      <h3>{data.time.range}</h3>
      <p>{data.time.place}</p>
    </div>
    
    {/* T I T L E */}
    <div className="container-third-width">
      <p>{data.title}</p>
    </div>
    
    {/* DESCRIPTION */}
    <div className="container-half-width-">
      <p className="copy-text">
        {data.description}
      </p>
    </div>
  </div>
)

CVLine.propTypes = {
  range: PropTypes.string,
  place: PropTypes.string,
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

CVLine.defaultProps = {
  time: `date`,
  place: `place`,
  siteTitle: `job title`,
  description: `description text`,
}

export default CVLine
