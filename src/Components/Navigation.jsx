import React from 'react'
import styled from 'styled-components'
import Abhi_Keep from '../img/Abhi_Keep.svg'
const Header = styled.header`
max-width: 100vw;
background-color: ${props => props.theme.nav};

`

const Navbar = styled.nav`
position: relative;
display: flex;
justify-content: flex-start;
align-items: center;
width: 95%;
margin: 0 auto;
height: ${props => props.theme.navHeight};

img{
    width: 4.5%;
    height: auto;
    /* margin-right: 1rem; */
}
`
const LogoName = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;

`

const Navigation = () => {
  return (
    <Header>
    <Navbar>
   <img src={Abhi_Keep} alt='img'></img>
   <LogoName>Abhi Keep</LogoName>
    </Navbar></Header>
  )
}

export default Navigation