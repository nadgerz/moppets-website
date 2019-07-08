// import PropTypes from "prop-types"
import React from 'react'
import { tech, software } from './skillsData'
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
          {
            tech.map( ( elem ) => {
              const MAX_SKILL_LEVEL = 6
              const skillLevel = elem.skillLevel
              
              return (
                <li
                  key={elem.id}
                  className={'container-third-width'}>
                  {elem.name}
                  
                  <span className={'skill-bubbles'}>
                    {/*{*/}
                    {/*for(let i = 1; i <= MAX_SKILL_LEVEL){*/}
                    {/*<div></div>*/}
                    
                    {/*}*/}
                    {/*}*/}
                  </span>
                </li>)
            } )
          }
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
          {
            software.map( ( elem ) => {
              return (
                <li
                  key={elem.id}
                  className={'container-half-width'}>
                  {elem.name}
                </li>
              )
            } )
          }
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
