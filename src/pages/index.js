import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BannerRegion from "../components/bannerRegion"


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
      <main>
          <h3>Hi Sheeple</h3>
          <p>Now go build something great.</p>
          <BannerRegion />
      </main>
  </Layout>
)

export default IndexPage
