import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Nat', age: 39 },
      { name: 'Jhon', age: 38 },
      { name: 'Alex', age: 0 },
    ]
  }

  handleSwitchName = () => {
    this.setState({
      persons: [
        { name: 'Naty', age: 39 },
        { name: 'Jhon', age: 38 },
        { name: 'Alex Fernando', age: 0 },
      ]
    });
  }
  render () {
    const  { persons } = this.state;
    return (
      <div className="App">
        <h1>Hey I'm starting this over</h1>
        <button onClick={this.handleSwitchName}>Swith name</button>
        <Person name={persons[0].name}  age={persons[0].age} />
        <Person name={persons[1].name}  age={persons[1].age} />
        <Person name={persons[2].name}  age={persons[2].age} >My hobbie is: Eat!</Person>
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hey I\'m starting this over'));
  }
}

export default App;
