import axios from "axios"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const getWeather = (city) => {
    const req = axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    return req.then(res => res.data)
}

export default {
    getWeather
}