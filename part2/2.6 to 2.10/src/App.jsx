import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  function handleFilterChange(event) {
    setNewFilter(event.target.value);
  }

  function addPerson(event) {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${personObject.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }
  }

  function handleNameInputChange(event) {
    setNewName(event.target.value);
  }

  function handleNumberInputChange(event) {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input value={newFilter} onChange={handleFilterChange}></input>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.reduce((filtered, person) => {
        if (person.name.toLowerCase().includes(newFilter.toLowerCase())) {
          filtered.push(
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          );
        }
        return filtered;
      }, [])}
      {/* <h2>Numbers</h2>
      {persons.map((person) => (

        <div key={person.name}>{person.name} {person.number}</div>
      
      ))} */}
    </div>
  );
};

export default App;
