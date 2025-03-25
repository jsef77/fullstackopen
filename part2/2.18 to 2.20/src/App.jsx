import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import countriesService from "./services/countries"
import Countries from "./components/Countries";

const App = () => {
  const [newFilter, setNewFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    countriesService
      .getAll()
      .then(allCountries => setCountries(allCountries))
  },[])


  function handleFilterChange(event) {
    setNewFilter(event.target.value);
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Countries countries={countries} filter={newFilter}/>
    </div>
  );
};

export default App;
