// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import "../assets/css/components/skills.scss"


const Skills = () => (
  <div className={"skills"}>
    {/* //  T E C H */}
    <section className="skill">
      <aside className="sidebar-left">
        <h3>Tech</h3>
      </aside>
      <div className="container-full-width">
        <ul className={"tech-stack stack"}>
          <li>React JS</li>
          <li>Gatsby</li>
          <li>JS</li>
          <li>SASS</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Git</li>
          <li>Drupal</li>
        </ul>
      </div>
    </section>
    
    {/*// S O F T W A R E */}
    <section className="skill">
      <aside className="sidebar-left">
        <h3 className="software">Software</h3>
      </aside>
      <div className="container-full-width">
        <ul className={"software-stack stack"}>
          <li>Jetbrains Webstorm IDE</li>
          <li>Sublime Text</li>
          <li>Jira</li>
          <li>Adobe XD</li>
          <li>Illustrator</li>
          <li>InDesign</li>
          <li>Photoshop</li>
        </ul>
      </div>
    </section>
  
  </div>
)

// Skills.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Skills.defaultProps = {
//   siteTitle: `my site`,
// }

export default Skills
