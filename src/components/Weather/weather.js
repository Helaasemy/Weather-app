import React from "react"

import {formatDate} from "../../utils"
import styles from "./weather.module.scss"

const Weather = ({ temp, city, time, icon, weather }) => { 
    const timeFormatted = formatDate(time)
    const tempFormatted = parseInt(temp)
    // console.log(content.weather[0].icon);
    return (
    <div className={styles.wrapper}>
        <h1 className={styles.degree}>{tempFormatted}°</h1>
        <div className={styles.geo}>
            <h1 className={styles.city}>{city}</h1>
            <p className={styles.date}>{timeFormatted}</p>
        </div>
        <div className={styles.icon}>
            <img src={`https://api.openweathermap.org/img/w/${icon}.png`} alt={weather}/>
            <p className={styles.date}>{weather}</p>
        </div>
    </div>
)
}

export default Weather