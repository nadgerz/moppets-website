import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BannerRegion from "../components/bannerRegion"


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
      <main>
          <BannerRegion />
        
      </main>
  </Layout>
)

export default IndexPage
