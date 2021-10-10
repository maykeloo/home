import React from 'react'
import image from '../../../images/weather-app.png'

const WeatherApp = () => {
    return (
        <>
            <img data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" src = {image} alt = 'weatherapp' style = {{width: '100%'}}/>
        </>
    )
}

export default WeatherApp
