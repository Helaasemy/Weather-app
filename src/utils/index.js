const url = process.env.REACT_APP_BASE_URL
const key = process.env.REACT_APP_API_KEY

export const fetchWeather = (latitude, longitude) => {
  return fetchJSON(`${url}lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`)
};

export const formatDate = (date) => {
  const milliseconds = date * 1000
  const dateObject = new Date(milliseconds)
  const formated = dateObject.toLocaleString("en-US", {
    weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric"
  })
  return formated
};

const fetchJSON = (url) => fetch(url).then(res => res.json())