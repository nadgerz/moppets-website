import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BannerRegion from "../components/bannerRegion"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"
import "../assets/css/pages/index.scss"

import { HiBubble } from "../assets/images/branding/svgs"
import Oranges from "../assets/images/oranges.png"


const homeData = {
  img: <HiBubble/>,
  text:
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quat. luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.
    </p>,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <BannerRegion data={homeData}/>
    <Skills/>
    <Portfolio/>
    <div className={"container-two-thirds-width image-container"}>
      <img className={'imgOranges'} src={Oranges} alt="cute Oranges"/>
    </div>
  </Layout>
)

export default IndexPage
