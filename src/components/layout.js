/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

import "../assets/css/layout.scss"
import "../assets/css/base/resets.scss"
import "../assets/css/base/typography.scss"


const Layout = ( { children } ) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <div className={"site-container"}>
        <Header siteTitle={data.site.siteMetadata.title}/>
        
        <main id={"main"}>{children}</main>
        
        <footer>
          <div className="sidebar-left"/>
          <div className={"container-half-width"}>
            
            © {new Date().getFullYear()} {data.site.siteMetadata.author}
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
