import React from 'react'
// import { Link } from "gatsby"

import SEO from '../components/seo'
import Layout from '../components/layout'
import BannerRegion from '../components/bannerRegion'
import Portfolio from '../components/portfolio'
import '../assets/css/pages/index.scss'

import { HiBubble } from '../assets/images/branding/svgs'
import oranges from '../assets/images/oranges.png'

const homeData = {
  img: <HiBubble />,
  text: (
    <>
      <p>
        I'm a frontend developer and graphic designer, who enjoys turning
        complex problems into simple, beautiful and intuitive designs.
      </p>
      <p>
        I can help you in your project: from creating UI mockups, graphical
        assets, wireframes, click-dummies for testing, and fixing design issues,
        to front-end web development and building full sites.
      </p>
    </>
  ),
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BannerRegion data={homeData} />
    <Portfolio />
    <div className={'container-two-thirds-width image-container'}>
      <img
        className={'imgOranges'}
        src={oranges}
        alt="cute Oranges"
        aria-hidden
      />
    </div>
  </Layout>
)

export default IndexPage
