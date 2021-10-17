import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS} from "react-scroll";

const color = 'rgba(216,165,1,255)'

export const SidebarContent = styled.aside`
    display: none;

    @media screen and (max-width: 920px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 999;
    transition: 0.3s ease-in-out;
    display: block;
    top: ${({ isOpen }) => (isOpen ? '0' : '-150%')};
    }
`

export const SidebarItems = styled.div`
    margin: auto auto;
    height: 60%;
    width: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 100px;
`


export const SidebarItem = styled(LinkS)`
    margin-top: 40px;
    font-weight: 300;
    cursor: pointer;
    display: flex;
    justify-content: center;
    
    

    &:hover {
        transition: all 0.2s ease-in-out;
        font-weight: bold;
    }
`

export const CloseIcon = styled(LinkR)`
    margin-top: 40px;
    font-weight: 300;
    cursor: pointer;
    font-size: 25px;
    color: ${color};

    &:hover {
        transition: all 0.2s ease-in-out;
        color: red;
    }
`

export const Link = styled(LinkR)`
    color: black;
    text-decoration: none;
    font-weight: normal;
    font-size: 40px;
    font-family: 'Playfair Display', serif;
    padding: 10px 50px;
    

    &:hover {
        font-weight: bold;
        background-color: ${color};
    }
`

