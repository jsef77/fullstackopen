import { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import axios from 'axios';



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  

  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then((res) => setPersons(res.data))
  },[])

  function handleNameInputChange(event) {
    setNewName(event.target.value);
  }

  function handleNumberInputChange(event) {
    setNewNumber(event.target.value);
  }

  function handleFilterChange(event) {
    setNewFilter(event.target.value);
  }

  function addPerson(event) {
    event.preventDefault();

    const newId = persons.length + 1;

    const personObject = {
      name: newName,
      number: newNumber,
      id: newId
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${personObject.name} is already added to the phonebook`);
    } else {
      const url = 'http://localhost:3001/persons'

      axios
        .post(url, personObject)
        .then(res => setPersons(persons.concat(res.data)))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h3>Add a new person</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameInputChange={handleNameInputChange}
        newNumber={newNumber}
        handleNumberInputChange={handleNumberInputChange}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} newFilter={newFilter} />
    </div>
  );
};

export default App;
