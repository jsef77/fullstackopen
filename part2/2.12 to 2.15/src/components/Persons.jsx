import React from "react";

function Persons({ persons, newFilter, deletePerson }) {
  return (
    <div>
      {persons.reduce((filtered, person) => {
        if (person.name.toLowerCase().includes(newFilter.toLowerCase())) {
          filtered.push(
            <p key={person.name}>
              {person.name} {person.number} <button type="button" onClick={() => deletePerson(person)}>delete</button>
            </p>
          );
        }
        return filtered;
      }, [])}
    </div>
  );
}

export default Persons;
