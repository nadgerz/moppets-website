import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BannerRegion from "../components/bannerRegion"
import Skills from "../components/skills"


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <main id={'main'}>
      <BannerRegion/>
      <Skills/>
    </main>
  </Layout>
)

export default IndexPage
