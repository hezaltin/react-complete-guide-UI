import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person'
// import Radium, { StyleRoot} from 'radium';

class App extends Component {
  state = {
    person: [
      {id:'dkdewew', name: 'Michael', age: 28 },
      {id:'dwewewee', name: 'Karthi', age: 28 },
      {id:'wewoedkn', name: 'Tamil', age: 28 }
    ],
    otherFormat: 'userName',
    showPersons:false
  }

  deletePersonHandler = (personIndex) => {
    console.log('item was Clicked!!')
    const persons = [...this.state.person];
    persons.splice(personIndex,1)
    //DONOT MUTATE TEH STATE LIKE this.state.person[0].name = 'Hezaltin' instead
    this.setState({
      person: persons
    })
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.person.findIndex(p=>{
      return p.id === id;
    });
    const person = {   //sigle Index from person Array
      ...this.state.person[personIndex]
    }
    person.name = event.target.value; //change the name property value

    const persons = [...this.state.person];
    persons[personIndex] = person

    console.log('item was Clicked!!')

    //DONOT MUTATE TEH STATE LIKE this.state.person[0].name = 'Hezaltin' instead
    this.setState({
      person: persons
    })
  }

  togglePersonsHandler = () => { 
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }

  render() {    // to Render into the Real DOM (JSX)
    // const style = {   //Inline Style
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // }
    let persons = null;
    let btnClass = ''

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.person.map((person,index)=>{
            return (
              <Person name={person.name} click={()=>this.deletePersonHandler(index)} age={person.age} key={person.id} changed={(event)=>this.nameChangeHandler(event,person.id)}/> 
            )
          })}
          {/* <Person name={this.state.person[0].name} age={this.state.person[0].age} />

          <Person click={this.switchNameHandler.bind(this, 'Michael Hezaltin Raja')} name={this.state.person[1].name} age={this.state.person[1].age} changed={this.nameChangeHandler} >  My Hobbie : Racing</Person>

          <Person name={this.state.person[2].name} age={this.state.person[2].age} /> */}
        </div>

       
      )
      //style.backgroundColor = 'red';
      btnClass = classes.Red;
    }
    // ADDING DYNAMIC CSS CLASSES
    const assignClasses = [];
        if(this.state.person.length <=2){
          assignClasses.push(classes.red);
        }

        if(this.state.person.length<=1){
          assignClasses.push(classes.bold);
        }

    return (   //JSX code
           <div className={classes.App}>
        <h1>Hello World I am React App!!</h1>
        <p className={assignClasses.join(' ')}>This is a paragraph Working!!</p>
        {/* <button onClick={this.switchNameHandler.bind(this,'Michael Hezaltin')}>Switch Name</button> */}
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work!!'))  // equivalent of the top code as well  (React Component)
  }
}

export default App;
