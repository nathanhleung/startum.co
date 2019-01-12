import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #333;
  color: #888;
  padding: 25px;
  padding-top: 60px;
  padding-bottom: 0;
`

const FooterContent = styled.div`
  padding: 1.45rem 1.0875rem;
  max-width: 960px;
  margin: 0 auto;

  a {
    color: #bbb;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: #ddd;
    }
  }
`
const Subtitle = styled.p`
  font-size: 0.75rem;
`

const Attribution = styled.div`
  font-size: 0.75rem;
`

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      <p>&copy; {new Date().getFullYear()} StartUM Entrepreneurship</p>
      <Subtitle>
        A student organization at the{' '}
        <a href="https://michiganross.umich.edu">
          Stephen M. Ross School of Business
        </a>{' '}
        at the <a href="https://umich.edu">University of Michigan</a>
      </Subtitle>
      <Attribution>
        <p>
          Ross Exterior image &copy;{' '}
          <a href="https://en.wikipedia.org/wiki/File:Ross_School_Exterior.jpg">
            MichiganRoss via CC BY-SA 3.0
          </a>
        </p>
      </Attribution>
    </FooterContent>
  </StyledFooter>
)

export default Footer
