import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const FooterContent = styled.footer`
    width: 100vw;
    height: 700px;
    background-color: black;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    position: relative;
    margin-top: 400px;


    @media screen and (max-width: 920px) {
        flex-direction: column;
        height: 1000px;
        margin-top: 0;
    }
`

export const FooterLeft = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 920px) {
        width: 100vw;
    }
`

export const FooterRight = styled.div`
    width: 60%;
    height: 100%;
    padding-left: 100px;
`

export const FooterForm = styled.form`
    width: 80%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    
`

export const TextArea = styled.textarea`
outline: none;
    border: 3px solid white;
    background-color: black;
    padding: 20px;
    color: white;
    font-family: 'Roboto Mono', sans-serif;`

export const FormInput = styled.input.attrs(props => ({
    type: props.type
}))`
    outline: none;
    font-size: 20px;
    border: 3px solid white;
    background-color: black;
    padding: 20px;
    color: white;
    font-family: 'Roboto Mono', sans-serif;
`

export const FormSubmit = styled.button`
    outline: none;
    font-size: 20px;
    border: 3px solid white;
    background-color: black;
    padding: 20px;
    color: white;
    font-family: 'Roboto Mono', sans-serif;
    transition: background-color, color;
    transition-duration: 0.1s;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
        font-weight: bold;
    }
`

export const FooterTitle = styled.h3`
    font-size: 4em;
    color: white;
    font-family: 'Playfair Display', sans-serif;
    margin: 0;

    @media screen and (max-width: 920px) {
       font-size: 2em;
    }
` 

export const LittleContact = styled.div`
    width: 60%;
    height: 30%;
`

export const StayInTouch = styled.span`
    font-family: 'Roboto Mono', sans-serif;
    color: gray;
    font-weight: bold;
    font-size: 27px;

    @media screen and (max-width: 920px) {
        font-size: 16px;
    }
`

export const LittleContactInfo = styled.p`
    font-size: 22px;
    font-family: 'Playfair Display', sans-serif;
    color: white;

    @media screen and (max-width: 920px) {
        font-size: 16px;
    }
`

export const FooterLinks = styled(Link)`
    font-family: 'Roboto Mono', sans-serif;
    margin-left: 10px;
    font-size: 30px;
    color: blue;
    text-decoration: none;

    @media screen and (max-width: 920px) {
        font-size: 15px;
        margin-left: 20px;
    }

    @media screen and (max-width: 1500px) {
        font-size: 20px;
    }
`

export const LinksBar = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;

    @media screen and (max-width: 920px) {
        margin-left: -30px
    }


`

export const RightContent = styled.div`
    margin-top: 40px;
    height: 87%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 920px) {
        margin-left: -60px;
    };
`

export const ScrollTop = styled(LinkS)`
    color: white;
    position: absolute;
    z-index: 100;
    bottom: 40px;
    right: 40px;
    display: block;
    background-color: white;
    color: black;
    padding: 20px 30px;
    font-weight: bold;
    font-family: 'Space Mono', sans-serif;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 920px) {
        bottom: 144px;
        right: 10px;
        padding: 10px 25px;
    }

    
    @media screen and (max-width: 1500px) {
        bottom: 50px;
        right: 40px;
        padding: 5px 15px;
    }
    `