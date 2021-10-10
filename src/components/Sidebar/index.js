import React from 'react'
import { SidebarContent, SidebarItem, SidebarItems, Link, CloseIcon } from './SidebarElements'
import { AiOutlineCloseSquare } from 'react-icons/ai'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContent isOpen = {isOpen} onClick = {toggle}>
            <SidebarItems>

                    <SidebarItem onClick = {toggle} to = 'home'>
                        <Link to = 'home'>Home</Link>    
                    </SidebarItem> 
                    
                    <SidebarItem onClick = {toggle} 
                    to = 'about'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={200}
                    duration={1500} 
                    >
                        <Link to = 'home'>About</Link>    
                    </SidebarItem> 

                    <SidebarItem onClick = {toggle} 
                    
                    activeClass="active"
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={1500} >
                         <Link to = 'home'>Works</Link>    
                    </SidebarItem> 

                    <SidebarItem onClick = {toggle} 
                    
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={200}
                    duration={2500} >
                    <Link to = 'home'>Contact</Link>    
                    </SidebarItem> 

                    <CloseIcon onClick = {toggle} to = 'home'>
                        <AiOutlineCloseSquare/> 
                    </CloseIcon> 
                </SidebarItems>
            </SidebarContent>
        </>
    )
}

export default Sidebar
