import styled from 'styled-components'
import { ScrollLink } from 'react-scroll'

const StyledButton = styled.a`
  font-family: Poppins, sans-serif;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  transition: all 0.3s;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  text-align: center;

  ${({ large }) => {
    if (large) {
      return `
        font-size: 1.25rem;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 30px;
        padding-right: 30px;
      `
    }
  }}

  &:hover {
    opacity: 0.5;
  }
`

const Button = StyledButton
const ScrollButton = ScrollLink(StyledButton)

export default Button
export { ScrollButton }
