import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person: [
      { name: 'Michael', age: 28 },
      { name: 'Karthi', age: 28 },
      { name: 'Tamil', age: 28 }
    ],
    otherFormat: 'userName',
    showPersons:false
  }

  switchNameHandler = (newName) => {
    console.log('item was Clicked!!')

    //DONOT MUTATE TEH STATE LIKE this.state.person[0].name = 'Hezaltin' instead
    this.setState({
      person: [
        { name: newName, age: 28 },
        { name: 'Karthi', age: 28 },
        { name: 'Tamil', age: 29 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    console.log('item was Clicked!!')

    //DONOT MUTATE TEH STATE LIKE this.state.person[0].name = 'Hezaltin' instead
    this.setState({
      person: [
        { name: 'Michael', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Tamil', age: 26 }
      ]
    })
  }

  togglePersonsHandler = () => { 
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }

  render() {    // to Render into the Real DOM (JSX)
    const style = {   //Inline Style
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (   //JSX code
      <div className="App">
        <h1>Hello World I am React App!!</h1>
        <p>This is a paragraph Working!!</p>
        {/* <button onClick={this.switchNameHandler.bind(this,'Michael Hezaltin')}>Switch Name</button> */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ? <div>
          <Person name={this.state.person[0].name} age={this.state.person[0].age} />

          <Person click={this.switchNameHandler.bind(this, 'Michael Hezaltin Raja')} name={this.state.person[1].name} age={this.state.person[1].age} changed={this.nameChangeHandler} >  My Hobbie : Racing</Person>

          <Person name={this.state.person[2].name} age={this.state.person[2].age} />
        </div>:null}
      </div>

    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work!!'))  // equivalent of the top code as well  (React Component)
  }
}

export default App;
