import React from 'react'
import Person from './Person/Person';

const persons = (props) => {

  const { persons, handleClick, handleChange } = props;
    return persons.map((person, index) => (
      <Person 
        name={person.name}
        age={person.age}
        handleClick={() => handleClick(index)}
        key={person.id}
        handleChange={(event) => handleChange(event, person.id)}
      />
    ))
}

export default persons;