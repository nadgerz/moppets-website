import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/css/pages/about.scss"


const About = () => (
  <Layout>
    <div className="about" id="about">
      
      <SEO title="About Me"/>
      <h2>Hi from the About Me page</h2>
      <p>Welcome to About</p>
    
    </div>
  </Layout>
)

export default About
