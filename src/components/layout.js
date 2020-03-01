/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Header from "./header"
import Menu from "./menu"
import "./css/layout.css"
import favicon from "./../assets/favicon.ico";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hyeonggeun's Terminal</title>
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <Menu />
          <main>{children}</main>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
