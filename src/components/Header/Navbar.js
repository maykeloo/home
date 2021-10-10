import React from 'react'
import { HeaderBar, Logo, MobileMenu, HeaderLink, HeaderLinkR, Menu } from './HeaderElements'
import Nav from './Nav';


const Navbar = ({toggle}) => {
    return (
        <>  
        <HeaderBar>
                    <Logo data-aos = 'fade-right' ><HeaderLinkR to = '/'>ms</HeaderLinkR></Logo>
                    <MobileMenu data-aos = 'fade-left'><HeaderLink to = 'sidebar' onClick = {toggle}><Menu to = 'sidebar' onClick = {toggle}/></HeaderLink></MobileMenu>
                    <Nav/>
        </HeaderBar>  
        </>
    )
}

export default Navbar
