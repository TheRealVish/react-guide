import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'max', age: 20},
      {name: 'min', age: 39},
      {name: 'XXX', age: 22}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked')
    this.setState({
      persons: [
        {name: newName, age: 20},
        {name: 'min', age: 39},
        {name: 'XXX', age: 22}       
      ]
    } 
    )
  }

  nameChangeHandler = (event) => {
    //console.log('was clicked')
    this.setState({
      persons: [
        {name: 'maxmin', age: 20},
        {name: event.target.value, age: 39},
        {name: 'XXX', age: 22}       
      ]
    } 
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>this is working</p>
        <button onClick={()=>this.switchNameHandler('Maxmillion')}>Switch</button>
        <Person 
          name={this.state.persons[0].name} 
          age ={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          click ={this.switchNameHandler.bind(this,'Vish')}/>
        <Person 
          name={this.state.persons[2].name} 
          age ={this.state.persons[2].age}
          change ={this.nameChangeHandler}>Hobbies: Racing</Person>
      </div>
    )
   // return React.createElement('div',null,React.createElement('h1',{className: 'App'},'Does this work'))

  }
}

export default App
