import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BannerRegion from "../components/bannerRegion"
import CVLine from "../components/CVLine"
import { Portrait } from "../assets/images/branding/svgs"
import "../assets/css/pages/about.scss"


const aboutData = {
  img: <Portrait/>,
  text:
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quat. luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.
    </p>,
}

const cvData = [
  {
    time:
      {
        range: "2019",
        place: "place",
      },
    title: "title",
    description: "description",
  },
  {
    time:
      {
        range: "2018",
        place: "place2",
      },
    title: "title2",
    description: "description2",
  },
]

const About = () => (
  <Layout>
    <SEO title="About Me"/>
    <div className="about" id="about">
      
      <BannerRegion data={aboutData}/>
      
      <section className={"CV"}>
        
        <aside className="sidebar-left">
          <h2>CV</h2>
        </aside>
        
        <div className="container-full-width">
          {
            cvData.map( ( data, i ) => {
              return <CVLine key={`CV` + i}
                             data={data}/>
            } )
          }
        </div>
      </section>
    </div>
  </Layout>
)

export default About
