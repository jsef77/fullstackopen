import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
