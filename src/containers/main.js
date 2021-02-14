import React, { useEffect, useState } from "react"

import publicIp from "public-ip"
import ipLocation from "iplocation"

import { fetchWeather } from '../utils';

import Weather from "../components/Weather/weather"
import WeatherDetails from "../components/WeatherDetails/weatherDetails"


const Main = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [currentWeather, setCurrentWeather] = useState({})
  const [detailsData, SetDetailsData] = useState({})

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
        function (error) {
          if (error) {
            const CurrentLocation = async () => {
              const id = await publicIp.v4()
              const geo = await ipLocation(id)
              setLatitude(geo.latitude)
              setLongitude(geo.longitude)
            }
            CurrentLocation()
          }
        }
      );
    }
  }, [])

  useEffect(() => {
    const fetchAll = async () => {
      const weather = await fetchWeather(latitude, longitude)
      setCurrentWeather(weather.current)
      SetDetailsData(weather)
    }
    fetchAll()
  }, [longitude])

  return (
    <>
      <Weather content={currentWeather} />
      <WeatherDetails content={detailsData} />
    </>
  )
}


export default Main
