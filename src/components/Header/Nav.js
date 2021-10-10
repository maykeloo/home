import React from 'react'
import { HeaderNav, HeaderItem, HeaderLink} from './HeaderElements'

const Nav = () => {
    return (
        <>
            <HeaderNav data-aos = 'fade-left' id = 'home'>
                            <HeaderItem>
                                <HeaderLink 
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={200}
                                    duration={1500}                                
                                >
                                    about
                                </HeaderLink>
                            </HeaderItem>

                            <HeaderItem>
                                <HeaderLink 
                                
                                activeClass="active"
                                to="works"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={2000} >
                                    works
                                </HeaderLink>
                            </HeaderItem>

                            <HeaderItem>
                                <HeaderLink
                                
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-240}
                                duration={2500} >
                                    contact
                                </HeaderLink>
                            </HeaderItem>
                            
                    </HeaderNav>
        </>
    )
}

export default Nav
