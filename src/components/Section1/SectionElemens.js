import styled from "styled-components";
import { MdOutlineFormatQuote } from 'react-icons/md'
const color = 'rgba(216,165,1,255)'
export const SectionContent = styled.section`
    background-color: ${color};
    width: 60%;
    height: 70vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    position: relative;


    @media screen and (max-width: 1500px) {
        height: 30vh;
    }
    
    @media screen and (max-width: 920px) {
        width: 100%;
        align-items: flex-start;
        height: 70vh;
    }
`

export const SectionText = styled.blockquote`
    position: relative;
    width: 70%;
    font-size: 30px;
    letter-spacing: 2px;
    line-height: 50px;
    margin: 0 auto;
    overflow-y: hidden;
    padding: 100px;
    color: white;
    font-weight: 300;
    font-family: 'Domine', sans-serif;


    @media screen and (max-width: 920px) {
        font-size: 15px;
        width: 80%;
        border: 0;
        padding: 0;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 2em;
    }

    @media screen and (max-width: 1500px) {
        font-size: 18px;
        width: 80%;
        border: 0;
        padding: 0;
        font-weight: 400;
    }
`

export const Quote = styled(MdOutlineFormatQuote)`
    position: absolute;
    font-size: 10em;
    color: white;
    z-index: 20;
    bottom: -50px;
    right: 150px;

    @media screen and (max-width: 920px) {
        font-size: 2em;
        z-index: -1;
    }

    @media screen and (max-width: 1500px) {
        font-size: 5em;
        z-index: -1;
    }
`

