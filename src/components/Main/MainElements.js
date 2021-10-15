import styled from "styled-components";
const color = 'rgba(216,165,1,255)'


export const MainContent = styled.main`
    width: 70vw;
    display: flex;
    margin: 0 auto;
    justify-content: center;
`

export const MainServices = styled.div`
    width: 80%;
    height: 500px;
    margin-top: 100px;
    display: flex;

    @media screen and (max-width: 920px){
        flex-direction: column;
    }
`

export const MainServiceLeft = styled.div`
    height: 100%;
    width:60%;

    @media screen and (max-width: 920px){
        
    }
`

export const MainServiceRight = styled.div`
    height: 100%;
    width:40%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;


    @media screen and (max-width: 920px){
        width:100%;
    }
`

export const MainLeftTitle = styled.h2`
    color: ${color};
    font-family: "Playfair Display", serif;
    font-size: 4em;
    user-select:none;
`

export const MainLeftText = styled.p`
    position: relative;
    width: 110%;
    letter-spacing: 1px;
    line-height: 50px;
    font-family: 'Raleway', sans-serif;
    font-size: 40px;
    user-select:none;
    transition: letter-spacing;
    transition-duration: 0.5s;
    &:hover {
        letter-spacing: 1.2px;
    }

    @media screen and (max-width: 920px){
        font-size: 30px;
        line-height: 1em;
        width: 80vw;
    }
`
export const YearOnMain = styled.span`
    font-weight: bold;
    font-family: 'Space Mono', sans-serif;
    position: relative;
    font-size: 18px;
    margin-top: 50px;
    width: 267px;
    transition: font-size 0.3s;

    &:after {
        position: absolute;
        content: '';
        bottom: 9px;
        left: 50px;
        width: 200px;
        height: 3px;
        background-color: black;
        transition: 0.3s ease-in-out;
    }
    &:hover {
        font-size: 30px;
    }

    &:hover:after {
        transition: 0.3s ease-in-out;
        bottom: -20px;
        left: 0;
    }
`
export const Social = styled.div`
margin-top: 20px;

width: 200px;
height: 40px;
display: flex;
align-items: center;
justify-content: space-around;
`

export const SocialLink = styled.a`
    border: 3px solid transparent;
    padding: 13px;

    &:hover {
        transition: 0.3s;
        border: 3px solid black;
    }
`

export const SocialImg = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`