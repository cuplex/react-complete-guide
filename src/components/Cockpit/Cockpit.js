import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }

  return (
    <div>
      <h1 className={classes.bold}>Hey I'm starting this over</h1>
      <p className={classes.red}>this is really working</p>
      <button 
        style={style}
        onClick={props.handleClick}>
          Toggle persons
      </button>
    </div>
  );
}

export default cockpit;