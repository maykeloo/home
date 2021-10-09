import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md'
import { HiMenuAlt2 } from 'react-icons/hi'
import { Link as LinkR } from "react-router-dom";



const color = 'rgba(216,165,1,255)'


export const HeaderContent = styled.div`
    position: relative;
    overflow: hidden;
`

export const BackgroundVideo = styled.video`
    position: absolute;
    top:0;
    left: 0;
    width: 100vw;
    height: 80vh;
    object-fit: cover;
    z-index: -100;

    @media screen and (max-width: 920px) {
        height: 70vh;
        border-bottom: 0;
    }
`




export const HeaderBar = styled.header`
    position: absolute;
    align-items: center;
    width: 70vw;
    height: 80px;
    top: 50px;
    left: 50%;
    margin-left: -35vw;
    display: flex;
    z-index: 10;
    justify-content: space-between;
`

export const Logo = styled.div`
    font-family: "Playfair Display", serif;
    font-size: 60px;
    font-weight: bold;
    color: white;
    position: relative;
    z-index: 10;


    &:after {
        transition: .4s ease-in-out;
        content: '';
        position: absolute;
        height: 10px;
        width: 90%;;
        background-color: ${color};
        z-index: -99;
        bottom: 10px;
        left: 20%;
    }

    &:hover:after {
        transition: all .2s;
        transform: translateX(30px);
    }
`

export const MobileMenu = styled.div`
    width:40px;
    height: 40px;
    display: none;
    background-color: white;
    margin-top: 20px;
    

    @media screen and (max-width: 920px) {
    display: flex;
    justify-content: center;
    align-items: center;
    }
`

export const HeaderNav = styled.nav`
    flex-basis: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 920px) {
        display:none;
    }
`



export const HeaderItem = styled(LinkS)`
    font-size: 30px;
    font-weight: bold;
    font-family: "Inter", sans-serif;
    padding: 10px 20px;
    border: 3px solid transparent;
    position: relative;
    z-index: 1;
    color: white;
    cursor: pointer;

    &:hover {
        transition: .2s ease-in-out;
        border: 3px solid white;
        color: white;
        background-color: rgba(255,255,255,0.3);
    }

    &:after {
        transition: .2s ease-in-out;
        content: '';
        position: absolute;
        height: 10px;
        width: 0px;
        background-color: ${color};
        z-index: -99;
        bottom: 12px;
        left: 20%;
    }
    &:hover:after {
        transition: .2s ease-in-out;
        content: '';
        position: absolute;
        height: 10px;
        width: 90%;;
        background-color: ${color};
        z-index: -99;
        bottom: 12px;
        left: 20%;
    }
`

export const HeaderLink = styled(LinkS)`
    cursor: pointer;
`

export const HeaderLinkR = styled(LinkR)`
    text-decoration: none;
    color: white;
    cursor: pointer;
`

export const HeaderTitles = styled.div`
    bottom: 15%;
    left: 15%;
    position: absolute;
    width: 50%;
    height: 400px;
    z-index: 20;
    border-bottom: 3px solid white;
    padding-bottom: 30px;

    @media screen and (max-width: 920px) {
        width: 70%;
        border-bottom: 0;
    }
`

export const HeaderTitle = styled.h1`
    color: white;
    font-size: 4em;
    font-family: 'Inter', sans-serif;
    height: 160px;
    user-select:none;

    @media screen and (max-width: 920px) {
        height: 100px;
        margin-top: 100px;
        font-size: 2.5em;
        font-family: 'Playfair Display', serif;
    }
`
export const HeaderText = styled.p`
    color: white;
    width: 100%;
    font-size: 40px;
    font-family: 'Roboto Mono', serif;
    line-height: 30px;
    letter-spacing: 2px;
    user-select:none;

    @media screen and (max-width: 920px) {
        display:none;
    }
`

export const HeaderAbout = styled(LinkS)`
    margin-top: 50px;
    width: 120px;
    height: 40px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    transition: transform;
    transition-duration: 0.3s;
    
    &:hover {
        
        transform: translateX(10px);
    }

    @media screen and (max-width: 920px) {
        display: none;
    }
`


export const AboutArrow = styled(MdKeyboardArrowRight)`
    background-color: ${color};
    padding: 3px;
`

export const AboutText = styled.span`
    color: white;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    font-size: 18px;
`

export const Menu = styled(HiMenuAlt2)`
    color: ${color}
` 
export const ScrollDown = styled.div`
    position: absolute;
    width: 40%;
    height: 10px;
    display: none;
    margin-top: 100px;

    @media screen and (max-width: 920px) {
        display: flex;
        left: 50%;
        margin-left: -20%;
        justify-content: center;
    }
`
export const ArrowDown = styled(MdKeyboardArrowDown)`
    font-size: 50px;
    color: white;
`