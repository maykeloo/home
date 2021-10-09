import React from 'react'
import Typewriter from 'typewriter-effect';
import { HeaderTitles,HeaderAbout, AboutArrow, ArrowDown, AboutText,HeaderTitle, HeaderText, ScrollDown, HeaderLink } from './HeaderElements'

const HeaderLeft = () => {
    return (
        <>
             <HeaderTitles data-aos = 'fade-right'>
                    <HeaderTitle>
                    <Typewriter
                        options={{
                            strings: ["Everyone kills boredom in a different way.", "Mine is the front-end."],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                        }}
                        />
                    </HeaderTitle>
                    <HeaderText>         
                        I'm glad you are here.
                    </HeaderText>
                    <HeaderAbout
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={200}
                        duration={1500} 
                    >
                        <AboutArrow/>
                        <AboutText>about me</AboutText>
                    </HeaderAbout >
                    <HeaderLink>
                    <ScrollDown>
                        <ArrowDown/>
                    </ScrollDown>
                    </HeaderLink>
                </HeaderTitles>
        </>
    )
}

export default HeaderLeft
