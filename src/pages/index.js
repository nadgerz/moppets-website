import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BannerRegion from "../components/bannerRegion"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"

import { HiBubble } from "../assets/images/branding/svgs"

const homeData = {
  img: <HiBubble/>,
  text: <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
    "        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quat. luptatum zzril
    "        delenit augue duis dolore te feugait nulla facilisi.
        </p>,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
      <BannerRegion data={homeData}/>
      <Skills/>
      <Portfolio/>
  </Layout>
)

export default IndexPage
