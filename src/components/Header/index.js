import React, { useEffect } from 'react'
import tv from '../../video/tv.mp4'
import Aos from 'aos';
import "aos/dist/aos.css"
import HeaderLeft from './HeaderLeft';
import Navbar from './Navbar';
import { HeaderContent, BackgroundVideo } from './HeaderElements';

export const Header = ({toggle}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <>
            <HeaderContent className = 'header'>
                <BackgroundVideo muted autoPlay = 'true' loop = 'true'>
                    <source src = {tv}/>
                </BackgroundVideo>
                <Navbar toggle = {toggle}/>
               <HeaderLeft/>
            </HeaderContent>
        </>
    )
}
