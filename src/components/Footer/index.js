import React from 'react'
import { LinksBar, RightContent } from './FooterElements'
import { FooterContent, FooterForm, FooterLeft,ScrollTop, FooterLinks, FooterRight, FooterTitle, FormInput, FormSubmit, LittleContact, LittleContactInfo, StayInTouch, TextArea } from './FooterElements'
const color = 'rgba(216,165,1,255)'
const Footer = () => {

    const Links = ['Dribble', 'Behance', 'Facebook', 'LinkedIn'];

    const ButtonsWithLinks = Links.map(link => (<FooterLinks>/ {link} /</FooterLinks>))

    const noSubmit = e => {
        e.preventDefault()
    }

    return (
        <>
            <FooterContent id = 'contact'>
                <FooterLeft>
                    <FooterForm action = 'https://formspree.io/f/mqkwjjnl' method = 'POST'>
                        <FormInput type = 'text' placeholder = 'Name'>

                        </FormInput>



                        <FormInput type = 'email' placeholder = 'E-mail'>
                            
                        </FormInput>



                        <FormInput type = 'tel' placeholder = 'Phone'>
                            
                        </FormInput>
                    
                        <TextArea cols = '4' rows = '10' placeholder = 'Text'></TextArea>
                        
                        <FormSubmit type = 'submit' onClick = {noSubmit}>
                            Text to me
                        </FormSubmit>
                    </FooterForm>
                </FooterLeft>

                <FooterRight>
                    <RightContent>
                    <FooterTitle>
                        Contact
                    </FooterTitle>
                    <LittleContact>
                        <StayInTouch>
                            STAY IN TOUCH
                        </StayInTouch>
                        <LittleContactInfo>
                            miniusukiennik987@gmail.com
                        </LittleContactInfo>

                        <LittleContactInfo>
                            (+48) 514 010 099
                        </LittleContactInfo>
                    </LittleContact>

                    
                    <LittleContactInfo style = {{color: `${color}`, fontWeight: 'bold' ,fontSize: '30px'}}>
                            WANT MORE?
                    </LittleContactInfo>
                    
                    <LinksBar>
                    {ButtonsWithLinks}
                    </LinksBar>
                    </RightContent>
                </FooterRight>
                <ScrollTop 
                
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500} >Scroll top</ScrollTop>
            </FooterContent>
        </>
    )
}

export default Footer
