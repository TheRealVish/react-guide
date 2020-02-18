import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solud blue',
      padding: '8px',
      cursor: 'pointer'

    }

    let persons = null

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
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>this is working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch</button>
         {persons}
      </div>
    )
   // return React.createElement('div',null,React.createElement('h1',{className: 'App'},'Does this work'))

  }
}

export default App
