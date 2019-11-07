import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withStyles from '../components/hoc/withStyles'

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
    count: 0,
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
  //   console.log('[App.js] componentDidMount);
 
  // }
  
  fetchPersons = () => {
    console.log('fetching persons...', this.state.persons);

    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (users) => users.json())
    .then( (users) => {
      const persons = users.map( user => {
        return ( 
        {
          id: user.id,
          name: user.name,
          age: 17, 
        });
      });

      console.log('setting App.js state...');
      this.setState(
        {
          persons: [...this.state.persons, ...persons]
        }
      );

      console.log('[App.js] data fetched, state set', this.state.persons);
    })
  }
  
  // handling setState correctly when it depends on previous state
  // and using callback to make sure we get the updated value
  // https://reactjs.org/docs/react-component.html#setstate
  countClicks = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    }, () => {
      console.log('[App,js]: countCLikcs: state=> ', this.state.count);
    });
  }
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
      <>
        <p>{this.props.appTitle}</p>
        <button onClick={this.toggleCockpit}>Hide/Show cockpit</button>
        <button onClick={this.countClicks}>Count</button>
        <p>{this.state.count}</p>
        {this.state.isCockPitShown && 
          <Cockpit
            handleClick={this.handleTogglePerson}
            personsCount={this.state.persons.length}
            fetchPersons={this.fetchPersons}
          />} 
        {personsToShow}
      </>
    );
    // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hey I\'m starting this over'));
  }
}

export default withStyles(App, classes.App);
