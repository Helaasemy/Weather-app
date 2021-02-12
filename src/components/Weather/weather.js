import PropTypes from "prop-types"
import React from "react"

import styles from "./weather.module.scss"

const Weather = () => (
    <div className={styles.wrapper}>
        <h1 className={styles.degree}>16°</h1>
        <div className={styles.geo}>
            <h1 className={styles.city}>London</h1>
            <p className={styles.date}>06:20 | Monday, 9 Sep '21</p>
        </div>
        <div className={styles.icon}>
            <img src="https://api.openweathermap.org/img/w/04n.png" alt="cloudy"/>
            <p className={styles.date}>cloudy</p>
        </div>
    </div>
)

// Weather.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Weather.defaultProps = {
//   siteTitle: ``,
// }

export default Weather