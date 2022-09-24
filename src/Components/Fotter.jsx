import React from 'react'
import styled from 'styled-components'


const Footer = styled.section`
width: 100vw;
position: relative;
bottom: 0;
height: 5.56rem;
background-color: ${props => props.theme.nav};
display: flex;
justify-content: center;
align-items: center;
`
const Fotter = () => {
  return (
    <Footer>&copy; {new Date().getFullYear()}</Footer>
  )
}

export default Fotter