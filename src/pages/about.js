import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BannerRegion from '../components/bannerRegion'
import CVLine from '../components/CVLine'
import Skills from '../components/Skills'
import { Portrait } from '../assets/images/branding/svgs'
import { cvData } from '../components/cvLineData'
import cvPDF from '../assets/pdf/2019_CV.pdf'
import strawberries from '../assets/images/strawberries.png'
import '../assets/css/pages/about.scss'

const aboutData = {
  img: <Portrait />,
  text: (
    <p>
      After teaching myself the principles of programming (in Java) for half a
      year in 2017, I began work as a freelance frontend developer at the
      beginning of 2018 for a development team/company of four, specialising in
      providing 3D online galleries for artists and gallerists.
    </p>
  ),
}

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="about" id="about">
      <BannerRegion data={aboutData} />

      <Skills />

      <section className={'CV'}>
        <aside className="sidebar-left">
          <div className="download-cv">
            <a href={cvPDF} download={`KerstinDengl_CV`}>
              <h2>CV</h2>
              DOWNLOAD
            </a>
          </div>
        </aside>

        <div className="container-full-width">
          {cvData.map(data => {
            return <CVLine key={data.id} data={data} />
          })}
        </div>
      </section>

      <div className={'container-two-thirds-width image-container'}>
        <img
          className={'imgStrawberries'}
          src={strawberries}
          alt="three yummy strawberries"
          aria-hidden
        />
      </div>
    </div>
  </Layout>
)

export default About
