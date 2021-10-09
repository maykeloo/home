import React from 'react'
import { HeaderNav, HeaderItem, HeaderLink } from './HeaderElements'

const Nav = () => {
    return (
        <>
            <HeaderNav data-aos = 'fade-left'>
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
                                <HeaderLink>
                                    works
                                </HeaderLink>
                            </HeaderItem>

                            <HeaderItem>
                                <HeaderLink>
                                    contact
                                </HeaderLink>
                            </HeaderItem>
                    </HeaderNav>
        </>
    )
}

export default Nav
