import React, { PureComponent }from 'react'
import Person from './Person/Person';

class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps...');
  //   return state
  // }

  // Commented out to use PureComponent which implements same check as shouldComponentUpdate
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate...');
  //   if (nextProps.persons !== this.props.persons) {
  //     return true;    
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate...');
    if(prevProps.persons.length !== this.props.persons.length) {
      return {persons: prevProps.persons};
    }
    if(prevProps.persons !== this.props.persons) {
      return {persons: prevProps.persons};
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate...', snapshot, this.props.persons);
  }

  render() {
    console.log('[Persons.js] rendering...');

    const { persons, handleClick, handleChange } = this.props;
    
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
}

export default Persons;