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

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate PersonsJS Initiated");
  //   if(nextProps.person !== this.props.person){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
   
  // }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate PersonsJS Initiated");
    return {message:'snapshot'}
  }

  componentDidUpdate(prevProps,prevState,snapshot){   //Prop changes as well as state changes
    console.log("[Persons.js] componentDidUpdate PersonsJS Initiated");
  }

  render() {
    console.log("[Persons.js] render PersonsJS Initiated");
    console.log('this.props.isAuthenticated==>',this.props.isAuthenticated)
    return this.props.person.map((person, index) => {
      return (
        <Person
          name={person.name}
          click={() => this.props.clicked(index)}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
          isAuth = {this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;


// use of context api==> prevent unwanted props drilling
// context Api => create a context as AuthContext class wrapper with the React.createContext({authenticated:false.login:()=>{}})// we have to pass anything, like array,object,string
// ----------------Wrap the componenent----------------
//create Provider as <AuthContext.Provider value={{}}></AuthContext>

//create Consumer as <AuthContext.Consumer >{(context)=>}</AuthContext>
//--------------Another Type----------------------------------
// contextType[class based component] & UseContext(AuthContext) [functional or dumb component] 
