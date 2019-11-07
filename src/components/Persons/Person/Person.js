import React from 'react';
import classes from './Person.module.css';
import withStyles from '../../hoc/withStyles'

const Person = (props) => {
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

export default withStyles(Person, classes.Person);