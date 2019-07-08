import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import banana from '../assets/images/banana.png'
import "../assets/css/pages/404.scss"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found"/>
    <div className={'not-found-page'}>
      <div className={'text-404'}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
      
      <div className={'container-third-width image-container'}>
        <img className={'imgBanana'} src={banana} alt="scared banana"/>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
