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
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quat. luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.
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
