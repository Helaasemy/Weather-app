import React, { useEffect, useState } from "react"

import publicIp from "public-ip"
import ipLocation from "iplocation"

import { fetchWeather } from '../utils';

import Weather from "../components/Weather/weather"
import WeatherDetails from "../components/WeatherDetails/weatherDetails"

const Main = () => {
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({})
  const [mainWeather, setMainWeather] = useState({})
  const [detailsData, setDetailsData] = useState({})

  useEffect(() => {
    // getting the ip address and user details 
    const getCurrentLocation = async () => {
      const id = await publicIp.v4()
      const geo = await ipLocation(id)
      setCity(geo.city)
       // fetching and setting weather data
      const weather = await fetchWeather(geo.latitude, geo.longitude)
      setCurrentWeather(weather.current)
      setDetailsData(weather.daily[0])
      setMainWeather(weather.current.weather[0])
      setLoading(false)
    }
    getCurrentLocation()
  }, [])


  return (
    <>
      {!loading ?
        <>
          <Weather
            temp={currentWeather.temp}
            city={city}
            time={currentWeather.dt}
            icon={mainWeather.icon}
            weather={mainWeather.main}
          />
          <WeatherDetails
            cloudy={currentWeather.clouds}
            humidity={currentWeather.humidity}
            wind={currentWeather.wind_speed}
            sunrise={currentWeather.sunrise}
            sunset={currentWeather.sunset}
            nextDay={detailsData}
            weather={detailsData.weather[0]}
            temp={detailsData.temp}
          />
        </>
        :
        <> loading...</>}
    </>
  )
}


export default Main
