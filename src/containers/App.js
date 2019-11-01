import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: 'qazwsx', name: 'Nat', age: 39 },
      { id: 'edcrfv', name: 'Jhon', age: 38 },
      { id: 'tgvbyh', name: 'Alex', age: 0 },
    ],
    isPersonsShown: false,
  }

  handleTogglePerson = () => {
    const { isPersonsShown } = this.state
    this.setState({ isPersonsShown: !isPersonsShown });
  }

  deletePerson = (index) => {
    let  persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  handleNameChange = (event, id) => {
    const { persons } = this.state;

    const personsUpdated = persons.map(p => {
      if(p.id === id) {
        return {
          ...p,
          name: event.target.value,
        }
      }
      return p;
    });

    this.setState({ persons: personsUpdated });
  }

  render () {
    let personsToShow = null;

    if (this.state.isPersonsShown) {
      personsToShow = <Persons 
        persons={this.state.persons}
        handleClick={this.deletePerson}
        handleChange={this.handleNameChange}
      />
    }

    return (
      <div className="App">
        <Cockpit handleClick={this.handleTogglePerson}/>
        {personsToShow}
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hey I\'m starting this over'));
  }
}

export default App;
