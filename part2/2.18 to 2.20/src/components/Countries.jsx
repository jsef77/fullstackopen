import React, { useState } from "react";
import CountryDetail from "./CountryDetail";


function Countries({ countries, filter, setNewFilter}) {

  function handleButton(event) {
    setNewFilter(event.target.id)
  }

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));

      if (filteredCountries.length > 11) {
        return <p>Too many matches, specify another filter</p>
        } else if (filteredCountries.length == 1) {
          const singleCountry = filteredCountries[0]
            return <CountryDetail country = {singleCountry}/>
        } else {
            return <>
            {filteredCountries.map(country => {
              return (
                <div key = {country.name.common}>
                {country.name.common} <button id={country.name.common} onClick={handleButton}>Show</button>
                </div>
              )
            })}
            </>
        }
}

export default Countries;
