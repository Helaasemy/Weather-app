import React from "react"
import PropTypes from 'prop-types';

import { formatHour } from "../../utils"
import styles from "./weatherDetails.module.scss"

const WeatherDetails = ({ cloudy, humidity, wind, sunrise, sunset, nextDay, weather }) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h4>Weather Details</h4>
        <hr size="1" />
        <div className={styles.details}>
          <p>Cloudy <span>{cloudy}%</span></p>
          <p>Humidity <span>{humidity}%</span></p>
          <p>Wind <span>{wind} k/h</span></p>
          <p>Sunrise <span>{formatHour(sunrise)}</span></p>
          <p>Sunset <span>{formatHour(sunset)}</span></p>
        </div>
      </div>
      <div className={styles.content}>
        <h4>Next Days</h4>
        <hr size="1" />
        <div className={styles.details}>
          <p>Weather <span>{weather.description}</span></p>
          <p>Cloudy <span>{nextDay.clouds}</span></p>
          <p>Humidity <span>{nextDay.humidity}%</span></p>
          <p>Wind <span>{nextDay.wind_speed} k/h</span></p>
          <p>Highest temp <span>{nextDay.temp.max}° </span></p>
          <p>Lowest temp <span>{nextDay.temp.min}°</span></p>
          <p>Sunrise <span>{formatHour(nextDay.sunrise)} </span></p>
          <p>Sunset <span>{formatHour(nextDay.sunset)}</span></p>
        </div>
      </div>
    </div>
  )
}
WeatherDetails.propTypes = {
  cloudy: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
  sunset: PropTypes.number,
  sunrise: PropTypes.number,
};
export default WeatherDetails