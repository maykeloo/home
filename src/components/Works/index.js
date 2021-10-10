import React, {useEffect} from 'react'
import { SectionTitle, TitleBar, WorksContent, Year, Image,} from './WorksElements'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Route } from 'react-router';
import WeatherAppInfo from './AppInfo/weatherApp';
import WeatherImage from './WeatherApp';
import CommingSoon from './AppInfo/commingsoon';
import CommingSoonDiv from './CommingSoon';




const Works = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <>
            <WorksContent id = 'works'>
                <TitleBar data-aos = 'fade-right'>
                    <SectionTitle>
                        Works
                    </SectionTitle>
                    <Year>2021</Year>
                </TitleBar>
                    <Route path = '/home' exact component = {() => <WeatherAppInfo/>}/>
                    <Route path = '/comming_soon' exact component = {() => <CommingSoon/>}/>
                <Image>
                    <Route path = '/home' exact component = {WeatherImage}/>
                    <Route path = '/comming_soon' exact component = {CommingSoonDiv}/>
                </Image>
            </WorksContent>
        </>
    )
}

export default Works
