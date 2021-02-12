import React from "react"

import Layout from "../containers/layout"
import Weather from "../components/Weather/weather"
import WeatherDetails from "../components/WeatherDetails/weatherDetails"


const IndexPage = () => (
  <Layout>
   <Weather/>
   <WeatherDetails/>
  </Layout>
)

export default IndexPage
