import React from 'react';
import classes from './Person.module.css';
import withStyles from '../../hoc/withStyles'
import PropTypes from 'prop-types';

class Person extends React.Component {
  // const {
  //   name,
  //   age,
  //   handleClick,
  //   handleChange, 
  // } props;

  constructor(props) {
    super(props);
    this.inputElRef = React.createRef();
    console.log('[Person.js] constructor: ref ',this.inputElRef);
  }

  componentDidMount() {
    console.log('[Person.js] componentDidMount ref:', this.inputElRef);

    this.inputElRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...')

    return (
      <React.Fragment>
        <p onClick={this.props.handleClick}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
        <input 
          type="text"
          onChange={this.props.handleChange}
          // ref={(inputEl) => {this.inputEl = inputEl}}
          ref={this.inputElRef}
          value={this.props.name}
        />
      </React.Fragment>
    );
  };
};

Person.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
}
export default withStyles(Person, classes.Person);