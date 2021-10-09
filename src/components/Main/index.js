import React, { useEffect } from 'react'
import { MainContent, MainLeftText, MainLeftTitle, MainServiceLeft, MainServiceRight, MainServices, Social, SocialImg, SocialLink, YearOnMain } from './MainElements'
import Behance from '../../images/behance.png'
import Facebook from '../../images/facebook.png'
import Linkedin from '../../images/linkedin.png'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Parallax } from 'react-scroll-parallax'
const Main = () => {
    

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])


    return (
        <>
            <MainContent>
                <MainServices>
                    <MainServiceLeft>
                            <Parallax x={[-40, 10]} >
                            <MainLeftTitle>
                                Services
                            </MainLeftTitle>
                            <MainLeftText >
                                Concept, interactions, software engineering, UI & graphics design, creative development.
                            </MainLeftText>
                            </Parallax>
                    </MainServiceLeft>

                    <MainServiceRight data-aos = 'fade-left'>
                        <Social >
                            <SocialLink href = 'https://www.linkedin.com/in/micha%C5%82-sukiennik-658b14167/'>
                            <SocialImg src = {Linkedin} alt = 'linkedin'/>
                            </SocialLink>

                            <SocialLink href = 'https://www.behance.net/'>
                            <SocialImg src = {Behance} alt = 'behance'/>
                            </SocialLink>

                            <SocialLink href = 'https://www.facebook.com/'>
                            <SocialImg src = {Facebook} alt = 'facebook'/>
                            </SocialLink>
                        </Social>

                        <YearOnMain>
                            2021
                        </YearOnMain>
                    </MainServiceRight>
                </MainServices>
            </MainContent>
        </>
    )
}

export default Main
