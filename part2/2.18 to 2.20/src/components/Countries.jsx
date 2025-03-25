import React, { useState } from "react";
import CountryDetail from "./CountryDetail";

function Countries({ countries, filter}) {


    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));

      if (filteredCountries.length > 11) {
        return <p>Too many matches, specify another filter</p>
        } else if (filteredCountries.length == 1) {
            return <CountryDetail country = {filteredCountries[0]}/>
        } else {
            return <>
            {filteredCountries.map(country => {
              return (
                <div key = {country.name.common}>
                <p>{country.name.common}</p>
                </div>
              )
            })}
            </>
        }
}

export default Countries;
