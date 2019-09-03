import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] constructor Persons Initiated");
  }

  // static getDerivedStateFromProps(props,state) {
  //   console.log("[Persons.js] getDerivedStateFromProps PersonsJS Initiated");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate PersonsJS Initiated");
    if(nextProps.person !== this.props.person){
      return true;
    }
    else{
      return false;
    }
   
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate PersonsJS Initiated");
  }

  componentDidUpdate(prevProps,prevState,snapshot){   //Prop changes as well as state changes
    console.log("[Persons.js] componentDidUpdate PersonsJS Initiated");
  }

  render() {
    console.log("[Persons.js] render PersonsJS Initiated");
    return this.props.person.map((person, index) => {
      return (
        <Person
          name={person.name}
          click={() => this.props.clicked(index)}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
