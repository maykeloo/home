import React, {useEffect} from 'react'
import { AboutCont, AboutContent,  AboutLeft, Touch, AboutRight, AboutText,  Hello, Me, ProfileImage, Techno, Technologies, Technology, TitleAbout, WelcomeHead, LittleContact, Mail, Phone, AboutLeftText } from './About'
import {Parallax} from 'react-scroll-parallax';
import Aos from 'aos';
import "aos/dist/aos.css"
import image from '../../images/image.jpg'

const About = () => {

    const Technolo = ['JavaScript', 'React Native', 'Redux', 'GIT', 'JSON','SASS', 'CSS3 & HTML5', 'Styled Components', 'Rest API']

    const showTech = Technolo.map(tech => {return <Technology>{tech} /</Technology>})
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <>

            <AboutContent id = 'about'>
                <TitleAbout>
                    About
                </TitleAbout>
                <Parallax x={[-100, 1]}>
                <Me/>
                </Parallax>

                <WelcomeHead>
                <AboutText>
                Hi, I am Michał Sukiennik, a Front-end Developer from Lesser Poland province.
                <br />
                I design <em>things</em>.
                </AboutText>
                <ProfileImage src = {image} data-aos = 'fade-left'/>
                </WelcomeHead>


            <AboutCont>
                <AboutLeft>
                    <AboutLeftText>
                    I am a multidisciplinary designer. My experience includes UI/UX design, product design, marketing design and front-end development.
                    <br />
                    <br />
                    As a designer, I put user needs first. I have a passion for organized workflows, visual language design, and solving complex problems.
                    <br />
                    <br />
                    I am more hands-on by profession as I have a mechatronics qualification, but software development has consumed me enough to stay in front of my desk for extended periods of time.
                    </AboutLeftText>
                </AboutLeft> 

                <AboutRight>
                    <Techno>Technologies</Techno>
                    <Technologies>{showTech}</Technologies>
                    <LittleContact>
                    <Touch>
                        STAY IN TOUCH
                    </Touch>
                    <Mail>
                        miniusukiennik987@gmail.com
                    </Mail>
                    <Phone>
                        +(48) 514 010 099
                    </Phone>
                    </LittleContact>
                </AboutRight>
            </AboutCont>  
            </AboutContent>
        </>
    )
}

export default About
