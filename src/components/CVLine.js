// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../assets/css/components/CVLine.scss"


const CVLine = ( { data } ) => (
  <div className="CVLine-content">
    
    {/* T I M E & place */}
    <div className={"time-place container-one-sixth-width"}>
      <h4>{data.time.range}</h4>
      <p>{data.time.place}</p>
    </div>
    
    {/* T I T L E */}
    <div className="title container-third-width">
      {/*<h4>title</h4>*/}
      <h4>{data.title}</h4>
    </div>
    
    {/* DESCRIPTION */}
    <div className="description container-half-width">
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
  range: `date`,
  place: ``,
  siteTitle: `job title`,
  description: `description copy`,
}

export default CVLine
