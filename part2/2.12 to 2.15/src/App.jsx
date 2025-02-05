import { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import personsService from "./services/persons"
import persons from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  

  useEffect(()=>{
    personsService
      .getAll()
      .then(allPersons => setPersons(allPersons))
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

    const newId = `${persons.length > 0 ? Math.max(...persons.map(p => Number(p.id))) + 1: 0}`; // 🤔 assuming p.id is typeof number. Also, creates gaps. But shouldn't break?

    const personObject = {
      name: newName,
      number: newNumber,
      id: newId
    };

    if (persons.some((person) => person.name === newName && person.number === newNumber)) {
      alert(`${personObject.name} is already added to the phonebook`);
      
    }
    else if (persons.some((person) => person.name === newName)) {
      if (window.confirm(`${personObject.name} is already added to the phonebook, replace the old number with a new one?`)) {
        const id = persons.filter(p => p.name === newName)[0].id
        personsService
          .updatePerson(id, personObject)
          .then(res => setPersons(persons.map(person => person.id === id ? res : person)))
      }
    }
     else {
      personsService
        .create(personObject)
        .then(res => setPersons(persons.concat(res)))
    }
  }

  function deletePerson(person) {
    if (window.confirm(`Delete ${person.name}?`))
    personsService
      .deletePerson(person.id)
      .then(res => setPersons(persons.filter(p => p.id !== res.id)))
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

      <Persons persons={persons} newFilter={newFilter} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
