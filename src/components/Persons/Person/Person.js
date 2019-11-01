import React from 'react';
import './Person.css';

const person = (props) => {
  const {
    name,
    age,
    children,
    handleClick,
    handleChange, 
  } = props;

  return (
    <div className="Person">
      <p onClick={handleClick}>I'm a {name} and I'm {age} years old</p>
      <input type="text" onChange={handleChange} value={name}></input>
      <p>{children}</p>
    </div>
  );
};

export default person;