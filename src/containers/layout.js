import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Header from "../components/Header/header"
import "./layout.module.scss"


const Layout = ({ children }) => {
  const publicIp = require('public-ip');
  const ipLocation = require('iplocation');
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");


  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        console.log('true');
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

  return (
    <div >
      <Header siteTitle="Weather-App" />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
