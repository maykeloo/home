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
    @media screen and (max-width: 920px) {
        width: 100%;
        align-items: flex-start;
    }
`

export const SectionText = styled.blockquote`
    position: relative;
    width: 60%;
    font-size: 30px;
    letter-spacing: 2px;
    line-height: 40px;
    margin: 0 auto;
    overflow-y: hidden;
    padding: 100px;
    border: 5px solid black;
    color: white;
    font-weight: 300;
    font-family: 'Playfair Display', sans-serif;

    @media screen and (max-width: 920px) {
        font-size: 20px;
        width: 80%;
        border: 0;
        padding: 0;
        font-weight: 400;
    }

`

export const Quote = styled(MdOutlineFormatQuote)`
    position: absolute;
    font-size: 15em;
    color: white;
    z-index: 20;
    bottom: -100px;
    right: 60px;

    @media screen and (max-width: 920px) {
        font-size: 7em;
        z-index: -1;
    }
`

