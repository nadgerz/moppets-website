import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {GitHub, CodePen, LinkedIn, Mail} from "../assets/images/socialIcons"
import "../assets/css/components/contact.scss"


const Contact = () => (
  <Layout>
    <SEO title="Contact me"/>
    <div className={'contact'} id={'contact'}>
      
      <aside className={"sidebar-left"}/>
      
      <div className={'container-two-thirds-width'}>
        <h2>GET IN TOUCH</h2>
        <p>Welcome to contact</p>
      </div>
      
      <section className="get-in-touch">
        <aside className={"sidebar-left"}/>
        
        <div className={'container-two-thirds-width'}>
          <ul className={'social-icons'}>
            <li className="mailto">
              <a href="mailto:kerstin.dengl@gmail.com">
                <Mail/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kerstin-dengl-ba59205/">
                <LinkedIn/>
              </a>
            </li>
            <li>
              <a href="https://github.com/MoppetX">
                <GitHub/>
              </a>
            </li>
            <li>
              <a href="/">
                <CodePen/>
              </a>
            </li>
          </ul>
        </div>
      </section>
    
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
