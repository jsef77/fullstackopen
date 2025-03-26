import {React} from 'react'
import Weather from './Weather'

export default function CountryDetail({country}) {

  console.log(country)

       if (country == null){
        return <></>
       } else return (<>
            <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
              {
                Object.entries(country.languages).map(([key, lang]) => {
                  return <li key={key}>{lang}</li>
                })
              }
            </ul>
              <img src={`${country.flags.png}`} />
            </div>
            <Weather city={country.capital} />
            </>
          )
}