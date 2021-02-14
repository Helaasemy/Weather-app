import React from "react"

import {formatDate} from "../../utils"
import styles from "./weather.module.scss"

const Weather = ({ content }) => { 
    const date = formatDate(content.dt)
    const temp = parseInt(content.temp)
    return (
    <div className={styles.wrapper}>
        <h1 className={styles.degree}>{temp}°</h1>
        <div className={styles.geo}>
            <h1 className={styles.city}>London</h1>
            <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.icon}>
            <img src="https://api.openweathermap.org/img/w/04n.png" alt="cloudy"/>
            <p className={styles.date}>cloudy</p>
        </div>
    </div>
)
}


Weather.defaultProps = {
    content: ``,
}

export default Weather