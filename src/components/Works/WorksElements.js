import styled, { keyframes } from "styled-components";
import { RiHashtag } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi'
import { BiRightArrowAlt } from 'react-icons/bi'
const color = 'rgba(216,165,1,255)'

const swap = keyframes`
  from {
    margin-left: 0px;
  }

  50% {
    margin-left: 20px;;
  }

  top {
    margin-left: 0px;;
  }
`;


export const WorksContent = styled.section`
    width: 60vw;
    height: 170vh;
    margin: 0 auto;
    margin-top: 120vh;
    display: flex;
    flex-direction: column;
    align-items: center;


    @media screen and (max-width: 1500px) {
        margin-top: 90vh;
        height: 80vh;
    }
    @media screen and (max-width: 920px) {
        margin-top: 150vh;
        height: 160vh;
    }
`

export const TitleBar = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 920px) {
        flex-direction: column;
    }
`

export const SectionTitle = styled.h3`
    color: ${color};
    font-size: 70px;
    margin: 0;
    font-family: 'Playfair Display', sans-serif;
    font-weight: bold;

    @media screen and (max-width: 920px) {
        font-size: 30px;
    }
`

export const Year = styled.span`
    font-family: 'Space Mono', sans-serif;
    font-weight: bold;
    font-size: 20px;
    position: relative;
    display: block;
    margin-right: 100px;

    &:after {
        content: '';
        position: absolute;
        bottom: 50%;
        transform: translateY(2px);
        right: -100px;
        width: 90px;
        height: 4px;
        background: black;
    }
`

export const AppNameTag = styled(Link)`
    width: 150%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content:space-around;
    text-decoration: none;
    color: black;
`

export const AppName = styled.h3`
    font-size: 5em;
    font-family: 'Playfair Display', sans-serif;
    @media screen and (max-width: 920px) {
        font-size: 30px;
    }

`

export const ArrowBar = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Arrow = styled(BiRightArrowAlt)`
    font-size: 5em;
    font-weight: bold;
    animation: ${swap} 0.5s infinite;
`

export const AppInfo = styled.div`
    width: 100%;
    height: 35%;
`

export const AppTextBar = styled.div`
    width: 110%;
    height: 70%;
    margin-top: 10px;
`

export const AppInfoText = styled.span`
    font-family: 'Space Mono', sans-serif;
    font-size: 22px;   
`

export const ToGit = styled.div`
    height: 10%;
    margin-top: 50px;
    width: 20%;
    background: white;
    display: flex;
    align-items: center;
    transition: 0.3s;

    &:hover {
        transform: translate(10px, -10px)
    }

    @media screen and (max-width: 920px) {
        margin-top: 200%;
    }
`

export const ToGitLink = styled.a`
    font-size: 30px;
    color: blue;
    text-decoration: none;
    position: relative;
    font-weight: bold;

    &:after {
        position: absolute;
        bottom: -5px;
        left: 0;
        content: '';
        background: blue;
        width: 100%;
        height: 3px;
    }
`

export const ArrowLink = styled(FiArrowUpRight)`
    color: blue;
    font-size: 40px;
`

export const Image = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 60%;

    @media screen and (max-width: 920px) {
        margin-top: 500px;
    }

    @media screen and (max-width: 1500px){
        height: 30%;
    }
`

