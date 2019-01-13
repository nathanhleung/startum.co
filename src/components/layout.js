import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import './layout.css'

const StyledLayout = styled.div`
  ${({ location }) =>
    location.pathname === '/'
      ? ''
      : `margin: 0 auto;
      max-width: 960;
      padding: 0px 1.0875rem 1.45rem;
      padding-top: 0;`}
`

const Layout = ({ children, location }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Lato|Poppins"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
              integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
              crossorigin="anonymous"
            />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <StyledLayout location={location}>{children}</StyledLayout>
          <Footer />
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
