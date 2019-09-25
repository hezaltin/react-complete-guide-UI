import React, { Component } from "react";
import classesCss from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from '../hoc/Auxiliary'
import withClass from '../hoc/withClass'
// import Radium, { StyleRoot} from 'radium';
import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props){
    super(props)
    // we can set the state here as well
    console.log('[App.js] constructor Initiated')
  }

  state = {
    person: [
      { id: "dkdewew", name: "Michael", age: 28 },
      { id: "dwewewee", name: "Karthi", age: 28 },
      { id: "wewoedkn", name: "Tamil", age: 28 }
    ],
    otherFormat: "userName",
    showPersons: false,
    showCockpit:true,
    changeCounter:0
  };

  static getDerivedStateFromProps(props,state){
    console.log(props)
    console.log('[App.js] getDerivedStateFromProps Initiated');
    return state;
  }

  deletePersonHandler = personIndex => {
    console.log("item was Clicked!!");
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    //DONOT MUTATE TEH STATE LIKE this.state.person[0].name = 'Hezaltin' instead
    this.setState({
      person: persons
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      //sigle Index from person Array
      ...this.state.person[personIndex]
    };
    person.name = event.target.value; //change the name property value

    const persons = [...this.state.person];
    persons[personIndex] = person;

    console.log("item was Clicked!!");

    //DONOT MUTATE TEH STATE LIKE this.state.person[0].name = 'Hezaltin' instead
    //Normal state Update withOut depending on the old State;
    // this.setState({
    //   person: persons
    // });
    // State Update Depend on he old State
    this.setState((prevState,currProps)=>{
      return {
        person: persons,
        changeCounter:prevState.changeCounter  + 1
      }
    });
    
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  //DEPRICATED IN NEW VERSIONS
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount Initiated')
  // }   

  componentDidMount(){
    console.log('[App.js] componentDidMount Initiated')
  }

  shouldComponentUpdate(){
    console.log("[App.js] shouldComponentUpdate  Initiated");
    return true;
  }

  componentDidUpdate(prevProps,prevState,snapshot){   //Prop changes as well as state changes
    console.log("[App.js] componentDidUpdate  Initiated");
  }

  componentWillUnmount(){  // execute once the App component will get Removed; ngDestroy
    console.log("[App.js] componentDidUpdate  Initiated");
  }



  render() {
    console.log('[App.js] render Initiated')
    // to Render into the Real DOM (JSX)
    const style = {
      //Inline Style
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          person={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );

      // style.backgroundColor = "red";
    }

    return (
      //JSX code
      <Aux>
        <button onClick={()=>{
          this.setState({showCockpit:false})
        }}>Remove</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.person.length}
          clicked={this.togglePersonsHandler}
        /> : null}
        {persons}
      </Aux>
    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work!!'))  // equivalent of the top code as well  (React Component)
  }
}

export default withClass(App,classesCss.App);
