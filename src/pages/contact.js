import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GitHub, LinkedIn, Mail } from "../assets/images/socialIcons"
// import { GitHub, CodePen, LinkedIn, Mail } from "../assets/images/socialIcons"
import "../assets/css/pages/contact.scss"
import Pineapple from "../assets/images/pineapple.png"


const Contact = () => (
  <Layout>
    <SEO title="Contact me"/>
    <div className={"contact"} id={"contact"}>
      
      <div className={"contact-banner"}>
        <aside className={"sidebar-left"}/>
        
        <div className={"container-two-thirds-width"}>
          <h2>GET IN TOUCH</h2>
          <p>Drop me a line in case you'd like to start working together</p>
        </div>
      </div>
      
      <section className="get-in-touch">
        <aside className={"sidebar-left"}/>
        
        <div className={"container-two-thirds-width"}>
          <ul className={"social-icons"}>
            <li className="mailto">
              <a href="mailto:kerstin.dengl@gmail.com">
                <Mail/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kerstin-dengl-ba59205/" target={"_blank"}>
                <LinkedIn/>
              </a>
            </li>
            <li>
              <a href="https://github.com/MoppetX" target={"_blank"}>
                <GitHub/>
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href="/">*/}
            {/*    <CodePen/>*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </section>
      
      <div className={"container-two-thirds-width image-container"}>
        <img className={"imgPineapple"} src={Pineapple} alt="Senorita Pinapple"/>
      </div>
    </div>
  </Layout>
)

export default Contact
