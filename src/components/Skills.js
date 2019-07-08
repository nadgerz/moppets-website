// import PropTypes from "prop-types"
import React from 'react'
import { tech } from './skillsData'
// import CVLine from "./CVLine"

import '../assets/css/components/skills.scss'


const Skills = () => (
  <div className={'skills'}>
    {/* //  T E C H */}
    <section className="skill">
      <aside className="sidebar-left">
        <h3>Tech</h3>
      </aside>
      <div className="container-full-width">
        <ul className={'tech-stack stack'}>
          {tech.map( elem => {
            const MAX_SKILL_LEVEL = 6
            const skillLevel = elem.skillLevel
            
            const skills = []
            
            for ( let i = 1; i <= MAX_SKILL_LEVEL; i++ ) {
              // console.log(i)
              if ( i <= skillLevel ) {
                // current skill level...
                skills.push( <div className={'skilled'}
                                  key={elem.id}></div> )
              }
              else {
                // still to learn...
                skills.push( <div></div> )
              }
            }
            return (
              <li key={elem.id} className={'container-third-width'}>
                {elem.name}
                <span className={'skill-bubbles'}>
                 {skills}
                </span>
              </li>
            )
          } )}
        </ul>
      </div>
    </section>
    
    {/*// S O F T W A R E */}
    <section className="skill">
      <aside className="sidebar-left">
        <h3 className="software">Software</h3>
      </aside>
      <div className="container-full-width">
        <ul className={'software-stack stack'}>
          <li className={'container-half-width'}>Webstorm IDE</li>
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
