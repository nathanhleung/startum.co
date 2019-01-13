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
  flex-wrap: wrap;
  flex: 1;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Brand = styled.h1`
  display: flex;
  flex: 1;
  flex-basis: 100%;
  margin: 0 auto;

  @media (min-width: 576px) {
    margin: 0;
    flex-basis: 50%;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 576px) {
    width: 200px;
    margin: 0;
  }
`

const ScrollButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 100%;

  @media (min-width: 576px) {
    flex-basis: 50%;
  }
`

const StyledScrollButton = styled(ScrollButton)`
  margin: 0 auto;

  @media (min-width: 576px) {
    margin: 0;
    margin-left: auto;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContent>
      <Brand>
        <Link
          to="/"
          style={{
            display: 'flex',
            color: `white`,
            textDecoration: `none`,
            flex: 1,
          }}
        >
          <ImageContainer>
            <Image style={{ width: '100%' }} />
          </ImageContainer>
        </Link>
      </Brand>
      <ScrollButtonContainer>
        <StyledScrollButton to="apply" offset={-30} duration={500} smooth>
          Apply Now
        </StyledScrollButton>
      </ScrollButtonContainer>
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
