import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  

  useEffect(() => {
    // this is executed only when first render occurs
    console.log('[Cockpit.js] useEffect');
    return () => {
      // this is executed only when component is removed from the DOM
      console.log('[Cockpit.js] cleanup code in useEffect');
    }
  },[]);

  useEffect(() => {
    // this is executed always sincem there's no second param assides de the function param for useEffect
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      // same as above
      console.log('[Cockpit.js] cleanup code in 2nd useEffect');
    }
  });
  
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

export default Cockpit;