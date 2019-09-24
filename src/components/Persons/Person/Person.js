import React, { Component } from "react";

import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from '../../../hoc/withClass';
//import Radium from 'radium';
import PropTypes from "prop-types";

class Person extends Component {
  // console.log('[App.js] person Initiated')
  // const style = {
  //     '@media (min-width:500px)':{
  //         width:'450',

  //     }
  // }
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated!</p> : <p>Please Log in!</p>}
        <p onClick={this.props.click}>
          I am {this.props.name}, I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
        //   ref={inputElem => {
        //     this.inputElement = inputElem;
        //   }} //only on class BAsed component
        ref={this.inputElementRef}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
