import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import { inherits } from 'util';

class App extends Component {

  state = {
    persons: [
      { name: 'Nat', age: 39 },
      { name: 'Jhon', age: 38 },
      { name: 'Alex', age: 0 },
    ]
  }

  handleSwitchName = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 39 },
        { name: 'Jhon', age: 38 },
        { name: 'Alex Fernando', age: 0 },
      ]
    });
  }

  handleChange = (event) => {
    this.setState({
      persons: [
        { name: 'Nat', age: 39 },
        { name: 'Jhon', age: 38 },
        { name: event.target.value, age: 0 },
      ]
    });
  }

  render () {
    const  { persons } = this.state;
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    return (
      <div className="App">
        <h1>Hey I'm starting this over</h1>
        <button style={style} onClick={this.handleSwitchName.bind(this,'Nathalie')}>Swith name</button>
        <Person 
          name={persons[0].name} 
          age={persons[0].age} 
        />
        <Person 
          name={persons[1].name} 
          age={persons[1].age} 
        />
        <Person 
          name={persons[2].name}
          age={persons[2].age}
          // passing methods references as prop to child component
          handleClick={(event) => this.handleSwitchName('Naty!!')}
          // two-way binding input text(onChange, value)
          handleChange={this.handleChange}
        >
          My hobbie is: Eat!
        </Person>
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hey I\'m starting this over'));
  }
}

export default App;
