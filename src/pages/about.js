import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BannerRegion from "../components/bannerRegion"
import CVLine from "../components/CVLine"
import { Portrait } from "../assets/images/branding/svgs"
import { cvData } from "../components/cvLineData"
import "../assets/css/pages/about.scss"
import Strawberries from "../assets/images/strawberries.png"


const aboutData = {
  img: <Portrait/>,
  text:
    <p>
      After teaching myself the principles of programming (in Java) for half a year in 2017, I began work as a freelance frontend developer at the beginning of 2018 for a development team/company of four, specialising in providing 3D online galleries for artists and gallerists.
    </p>,
}

const About = () => (
  <Layout>
    <SEO title="About Me"/>
    <div className="about" id="about">
      
      <BannerRegion data={aboutData}/>
      
      <section className={"CV"}>
        
        <aside className="sidebar-left">
          <div className="download-cv">
            <h2>CV</h2>
            <a href="#">
              DOWNLOAD
            </a>
          </div>
        </aside>
        
        <div className="container-full-width">
          {
            cvData.map( ( data ) => {
              return <CVLine key={data.id}
                             data={data}/>
            } )
          }
        </div>
      </section>
      
      <div className={"container-two-thirds-width image-container"}>
        <img className={"imgStrawberries"} src={Strawberries} alt="three yummy strawberries"/>
      </div>
    </div>
  </Layout>
)

export default About
