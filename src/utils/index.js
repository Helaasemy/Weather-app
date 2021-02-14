const url = process.env.REACT_APP_BASE_URL
const key = process.env.REACT_APP_API_KEY
// fetch weather data 
export const fetchWeather = (latitude, longitude) => {
  return fetchJSON(`${url}lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`)
};

// format unix date to UTF 
export const formatDate = (date) => {
  const milliseconds = date * 1000
  const dateObject = new Date(milliseconds)
  const formated = dateObject.toLocaleString("en-US", {
    weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric"
  })
  return formated
};

// format Unix to hours
export const formatHour = (hour) => {
  const milliseconds = hour * 1000
  const dateObject = new Date(milliseconds)
  const formated = dateObject.toLocaleString("en-US", {
     hour: "numeric", minute: "numeric"
  })
  return formated
};

const fetchJSON = (url) => fetch(url).then(res => res.json())