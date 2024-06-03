import React from "react";

function Persons({ persons, newFilter }) {
  return (
    <div>
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
    </div>
  );
}

export default Persons;
