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
                    
                    <SidebarItem onClick = {toggle} to = 'about'>
                        <Link to = 'home'>About</Link>    
                    </SidebarItem> 

                    <SidebarItem onClick = {toggle} to = 'services'>
                         <Link to = 'home'>Services</Link>    
                    </SidebarItem> 

                    <SidebarItem onClick = {toggle} to = 'portfolio'>
                    <Link to = 'home'>Portfolio</Link>    
   
                    </SidebarItem> 

                    <SidebarItem onClick = {toggle} to = 'contact'>
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
