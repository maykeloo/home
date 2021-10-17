import styled from "styled-components";
import { SiAboutdotme } from 'react-icons/si'
const color = 'rgba(216,165,1,255)'


export const AboutContent = styled.div`
    width: 60vw;
    height: 1000px;
    margin: 0 auto;
    margin-top: 200px;
    overflow-x: hidden;
    overflow: hidden;

    @media screen and (max-width: 920px) {
         margin-top: 0;
        }
`

export const BackgroundVideo = styled.video`
    position: absolute;
    margin-top: 50px;
    width: 60vw;
`

export const TitleAbout = styled.h2`
    color: ${color};
    font-size: 70px;
    font-family: 'Playfair Display', sans-serif;
`

export const Me = styled(SiAboutdotme)`
    position: absolute;
    color: rgba(163,163,163,0.3);
    font-size: 20em;

    @media screen and (max-width: 920px) {
        font-size: 10em;
    }
`

export const AboutText = styled.p`
    font-family: 'Playfair Display', sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 60px;
    position: relative;

    @media screen and (max-width: 920px) {
         font-size: 18px;
     }

     @media screen and (max-width: 1500px) {
         font-size: 45px;
     }
`



export const WelcomeHead = styled.div`
    width: 70%;
    height: 300px;
    margin-top: 250px;
    display: flex;
    flex-direction: row;
    
     @media screen and (max-width: 920px) {
         overflow-y: hidden;
         flex-direction: column;
         height: 100vh;
         width: 100%;
         overflow: hidden;
     }
`

export const ProfileImage = styled.img`
    width: 450px;
    position: absolute;
    height: 400px;
    object-fit: cover;
    z-index: -1;
    right: 20.5%;

    @media screen and (max-width: 920px) {
         width: 200px;
         height: 250px;
         position: static;
     }

     @media screen and (max-width: 1500px) {
         width: 350px;
         height: 350px;
     }
`


export const AboutCont = styled.div`
    position: absolute;
    width: 60%;
    height: 100vh;
    margin-top: 230px;
    display: flex;
    
    

    @media screen and (max-width: 920px) {
         margin-top: -300px;
         flex-direction: column;
     }
`

export const AboutLeft = styled.section`
    width: 70%;
    height: 100%;
    display: flex;

    @media screen and (max-width: 920px) {
         flex-direction: row;
          width: 77vw;
          margin-left: -30px;
          height: 60%;
        }
    
`

export const AboutRight = styled.section`
    width: 30%;
    height: 50%;

    @media screen and (max-width: 920px) {
        height: 20%;
        margin-left: -30px;
        margin-top: 300px;
    }
`
export const Technologies = styled.div`
    display: flex;
    flex-direction: column;
    

    @media screen and (max-width: 920px) {
        flex-direction: row;
        width: 80vw;
        flex-wrap: wrap;
    }
`

export const Techno = styled.h3`
    font-family: 'Space Mono';
    font-weight: lighter;
    font-size: 40px;
    justify-self: flex-end;
`

export const Technology = styled.span`
    font-weight: normal;
    font-family: 'Raleway', serif;
    margin-top: 10px;

`
export const LittleContact = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
`
export const Touch = styled.span`
    font-family: 'Raleway', sans-serif;
    color: gray;
`

export const Mail = styled.span`
    margin-top: 40px;
    color: gray;
    font-family: 'Playfair Display', sans-serif;
    letter-spacing: 1px;
`

export const Phone = styled.span`
    margin-top: 20px;
    font-family: 'Playfair Display', sans-serif;
    letter-spacing: 1px;

    
    @media screen and (max-width: 920px) {
            display: block;
            width: 40vw;
        }
`
export const AboutLeftText = styled.p`
    font-size: 30px;
    line-height: 40px;
    font-weight: lighter;
    width: 80%;
    font-family: 'Domine', sans-serif;

    @media screen and (max-width: 920px) {
         font-size: 16px;
         width: 100%;
         margin-top: 200px;
        }
`
