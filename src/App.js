import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import styled from 'styled-components'


const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'blue' };
  color: yellow;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer; 

  &:hover {
    background-color: lightgreen;
    color: black;
  }

`

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'max', age: 20},
      {id: '2',name: 'min', age: 39},
      {id: '3',name: 'XXX', age: 22}
    ],
    showPersons: false
  }

/*   switchNameHandler = (newName) => {
    //console.log('was clicked')
    this.setState({
      persons: [
        {name: newName, age: 20},
        {name: 'min', age: 39},
        {name: 'XXX', age: 22}       
      ]
    } 
    )
  } */


  deleteNameHandler = (passedIndex) => {
    const passed = [...this.state.persons]
    passed.splice(passedIndex, 1)
    this.setState({persons: passed})
  }

  nameChangeHandler = (event,id) => {
    const index = this.state.persons.findIndex(pi=>{
      return pi.id===id;
    })

    const namePerson = {...this.state.persons[index]}
    namePerson.name = event.target.value

    const newPersons = [...this.state.persons]
    newPersons[index] = namePerson

    this.setState({persons: newPersons})

   /*  this.setState({
      persons: [
        {name: 'maxmin', age: 20},
        {name: event.target.value, age: 39},
        {name: 'XXX', age: 22}       
      ]
    } 
    )  */

  }

  togglePersonsHandler = () => {
    const wher = this.state.showPersons
    this.setState({showPersons: !wher})
  }


  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solud blue',
      padding: '8px',
      cursor: 'pointer'

    }

    let persons = null
    let classes = []

    if (this.state.persons.length <= 2){
      classes.push('red')
    }

    if (this.state.persons.length <=1 ){
      classes.push('bold')
    }

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map( (person, index) => {
          return <Person 
          change = {(event) => this.nameChangeHandler(event, person.id)}
          click={()=>this.deleteNameHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}/>
        }

        )

        }
      </div>
      
/*       <div> 
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
      </div> */
      
      )
      style.backgroundColor = 'red'
      
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>this is working</p>
        <StyledButton 
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Switch</StyledButton>
         {persons}
      </div>
    )
   // return React.createElement('div',null,React.createElement('h1',{className: 'App'},'Does this work'))

  }
}

export default App
