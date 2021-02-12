import PropTypes from "prop-types"
import React from "react"

import styles from "./weatherDetails.module.scss"

const WeatherDetails = () => (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h4>Weather Details</h4>
        <hr size="1"/>
        <div className={styles.details}>
            <p>Cloudy <span>90%</span></p>
            <p>Humidity <span>90%</span></p>
            <p>Wind <span>9 k/h</span></p>
        </div>
      </div>
      <div className={styles.content}>
        <h4>Next Days</h4>
        <hr size="1"/>
        <div className={styles.details}>
            <p>Cloudy <span>90%</span></p>
            <p>Humidity <span>90%</span></p>
            <p>Wind <span>9 k/h</span></p>
        </div>
      </div>
    </div>
)

// WeatherDetails.propTypes = {
//   siteTitle: PropTypes.string,
// }

// WeatherDetails.defaultProps = {
//   siteTitle: ``,
// }

export default WeatherDetails