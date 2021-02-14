import React, { useEffect, useState } from "react"

import publicIp from "public-ip"
import ipLocation from "iplocation"

import { fetchWeather } from '../utils';

import Weather from "../components/Weather/weather"
import WeatherDetails from "../components/WeatherDetails/weatherDetails"


const Main = () => {
  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({})
  const [mainWeather, setMainWeather] = useState([])
  const [detailsData, SetDetailsData] = useState({})

  useEffect(() => {
    // getting the ip address and user details 
          const CurrentLocation = async () => {
            const id = await publicIp.v4()
            const geo = await ipLocation(id)
            setLatitude(geo.latitude)
            setLongitude(geo.longitude)
            setCity(geo.city)
          }
          CurrentLocation()
  }, [])

  useEffect(() => {
    // fetching and setting data
    if(latitude.length != 0 ) {
      const fetchAll = async () => {
        const weather = await fetchWeather(latitude, longitude)
        setCurrentWeather(weather.current)
        SetDetailsData(weather.daily[0])
        setMainWeather(weather.current.weather[0])
        setLoading(false)
      }
      fetchAll()
    }
  }, [longitude])
  
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
          {console.log(`${currentWeather.clouds}`)}
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
