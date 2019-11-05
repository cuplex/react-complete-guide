import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    console.log(props)
    return state;
  }
  
  state = {
    persons: [
      { id: 'qazwsx', name: 'Nat', age: 39 },
      { id: 'edcrfv', name: 'Jhon', age: 38 },
      { id: 'tgvbyh', name: 'Alex', age: 0 },
    ],
    isPersonsShown: false,
    isCockPitShown: true,
  }

  handleTogglePerson = () => {
    const { isPersonsShown } = this.state
    this.setState({ isPersonsShown: !isPersonsShown });
  }

  toggleCockpit = () => {
    console.log('called toggleCockpit');  
    this.setState({
      isCockPitShown: !this.state.isCockPitShown
    });
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
  
  // componentDidMount() {
  //   console.log('[App.js] componentDidMount... fetching data', this.state);
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then( (users) => users.json())
  //   .then( (users) => {
  //     const persons = users.map(user => ({ id: user.id, name: user.name, age: 17, }));
  //     this.setState(
  //       {
  //         persons: [...this.state.persons, ...persons]
  //       }
  //     );
  //     console.log('[App.js] componentDidMount...data fetched', this.state);
  //   })
  // }
  
  

  render () {
    console.log('[App.js] rendering...');
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
        <p>{this.props.appTitle}</p>
        <button onClick={this.toggleCockpit}>Hide/Show cockpit</button>
        {this.state.isCockPitShown && <Cockpit handleClick={this.handleTogglePerson}/>} 
        {personsToShow}
      </div>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hey I\'m starting this over'));
  }
}

export default App;
