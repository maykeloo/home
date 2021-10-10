import React from 'react'
import { AppTextBar, AppNameTag, AppName, ArrowBar, Arrow, AppInfo, AppInfoText, ToGit, ToGitLink, ArrowLink } from '../WorksElements'

const WeatherAppInfo = () => {
    return (
        <>     
                <AppNameTag to = 'comming_soon' >
                    <AppName data-aos = 'fade-left'>
                        Weather App
                    </AppName>
                    <ArrowBar data-aos = 'fade-left'>
                        <Arrow delay = '0'/>
                        <Arrow delay = '0.5s'/>
                        <Arrow delay = '1s'/>
                    </ArrowBar>
                </AppNameTag>

                <AppInfo>
                    <AppTextBar >
                        <AppInfoText>
                        The first application using API that caused me a lot of problems but also satisfaction when it finally started to work SENSIBLY. It is not a masterpiece, but with time, when I get into practice, I will improve it. It uses the OpenwWeatherMap API and is a fully functional application that retrieves weather data from a given place entered by the user.
                        </AppInfoText>
                    </AppTextBar>

                    <ToGit data-aos="fade-right" data-aos-duration="400">
                        <ToGitLink  href = 'https://maykeloo.github.io/weather-app/'>show_on_git</ToGitLink>
                        <ArrowLink/>
                    </ToGit>
                </AppInfo>
        </>
    )
}

export default WeatherAppInfo
