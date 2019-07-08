// import PropTypes from "prop-types"
import React from 'react'
import { tech, designTools } from './skillsData'

import '../assets/css/components/skills.scss'


const createSkillIndicators = ( elem ) => {
  const MAX_SKILL_LEVEL = 6
  const skillLevel = elem.skillLevel
  const skillIndicators = []
  
  for ( let i = 1; i <= MAX_SKILL_LEVEL; i++ ) {
    if ( i <= skillLevel ) {
      // current skill level...
      skillIndicators.push( <div className={'skilled'} key={i}></div> )
    }
    else {
      // still to learn...
      skillIndicators.push( <div key={i}></div> )
    }
  }
  return skillIndicators
}

const Skills = () => (
  <div className={'skills'}>
    {/*  T E C H  */}
    <section className="skill">
      <aside className="sidebar-left">
        <h3>Tech</h3>
      </aside>
      <div className="container-full-width">
        <ul className={'tech-stack stack'}>
          {tech.map( elem => {
            const skillIndicators = createSkillIndicators( elem )
            
            return (
              <li key={elem.id}
                  className={'container-third-width'}
              >
                {elem.name}
                <span className={'skill-bubbles'}>
                  {skillIndicators}
                </span>
              </li>
            )
          } )}
        </ul>
      </div>
    </section>
    
    {/*  D E S I G N  T O O L S  */}
    <section className="skill">
      <aside className="sidebar-left">
        <h3 className="design-tools">Design Tools</h3>
      </aside>
      <div className="container-full-width">
        <ul className={'design-tools-stack stack'}>
          {
            designTools.map( ( elem ) => {
              const skillIndicators = createSkillIndicators( elem )
              
              return (
                <li
                  key={elem.id}
                  className={'container-third-width'}>
                  {elem.name}
                  <span className={'skill-bubbles'}>
                    {skillIndicators}
                  </span>
                </li>)
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
