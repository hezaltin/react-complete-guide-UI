import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' 

class App extends Component {

  state = {
    person:[
      {name:'Michael', age:28},
      {name:'Karthi', age:28},
      {name:'Tamil', age:28}
    ],
    otherFormat:'userName'
  }

  switchNameHandler = () =>{
    console.log('item was Clicked!!')

    //DONOT MUTATE TEH STATE LIKE this.state.person[0].name = 'Hezaltin' instead
    this.setState({
      person:[
        {name:'Michael Hezaltin', age:28},
        {name:'Karthi', age:28},
        {name:'Tamil', age:29}
      ]
    })
  }
  render() {    // to Render into the Real DOM (JSX)
    return (   //JSX code
      <div className="App">
        <h1>Hello World I am React App!!</h1>
        <p>This is a paragraph Working!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}> My Hobbie : Racing</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    
    );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work!!'))  // equivalent of the top code as well  (React Component)
  }
}

export default App;
