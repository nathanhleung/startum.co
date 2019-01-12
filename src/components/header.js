import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Image from './image'
import { ScrollButton } from './button'

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const ImageContainer = styled.div`
  width: 100%;

  @media (min-width: 576px) {
    width: 200px;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContent>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <ImageContainer>
            <Image style={{ width: '100%' }} />
          </ImageContainer>
        </Link>
      </h1>
      <ScrollButton to="apply" offset={-10} duration={500} smooth>
        Apply Now
      </ScrollButton>
    </HeaderContent>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
