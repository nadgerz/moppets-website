import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/css/components/contact.scss"


const Contact = () => (
  <Layout>
    <SEO title="Contact me"/>
    <div className={'contact'} id={'contact'}>
      
      <aside className={"sidebar-left"}/>
      
      <div>
        <h2>Hi from the contact page</h2>
        <p>Welcome to contact</p>
      </div>
    
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
