import React, {useState} from 'react'
import 'aos/dist/aos.css';
import '../App.css';
import { Header } from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Section1 from '../components/Section1';
import About from '../components/About';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Header toggle = {toggle}/>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Main/>
            <Section1/>
            <About/>
        </>
    )
}

export default Home
