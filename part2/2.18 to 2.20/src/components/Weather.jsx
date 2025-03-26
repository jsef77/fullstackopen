import {React, useState, useEffect} from 'react'
import weatherService from '../services/weather'

function Weather({city}) {

  const [weatherDetails, setWeatherDetails] = useState(null)

  useEffect(() => {
    weatherService
      .getWeather(city)
      .then(r => setWeatherDetails(r))
  }, [])

  if (weatherDetails == null) {
    return <></>
  } else
  return (<>
    <h2>Weather in {city}</h2>
    <p>Temperature: {weatherDetails.current.temp_c} Celsius</p>
    <img src={weatherDetails.current.condition.icon} />
    <p>Wind: {weatherDetails.current.wind_mph} mph</p>
    </>
  )
}

export default Weather