import React from 'react';
import './Person.css';
// import Aux from '../../hoc/Aux'

const person = (props) => {
  const {
    name,
    age,
    handleClick,
    handleChange, 
  } = props;

  console.log('[Person.js] rendering...')
  return (
    <React.Fragment>
      <p onClick={handleClick}>I'm a {name} and I'm {age} years old</p>
      <input 
        type="text"
        onChange={handleChange}
        value={name}
      />
    </React.Fragment>
  );
};

export default person;