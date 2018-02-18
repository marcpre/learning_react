import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      { id: 'a12sdf', name: 'Max', age: 28},
      { id: 'as23df',  name: 'Maxddsdf', age: 24},
      { id: 'asd4f', name: 'adf', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    
    //get person of json
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); 
    
    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
   })
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
    
deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  //Creates a real copied object and does not change the main object
  const persons = [...this.state.persons]; //spreads out the elements and adds to the new array
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;
    
    if(this.state.showPersons) {
      persons = (
        <div>
          {/* mapping all list objects to the output */}
          {this.state.persons.map((person, index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name = {person.name} 
            age = {person.age} 
            key = {person.id} 
            changed = {(event) => this.nameChangeHandler(event, person.id)}/>
          })}
      </div> 
      );
    }

    return ( 
      <div className = "App" >
        <h1 > Hi, I am a react app. </h1>  
          <button 
            style={style}
            onClick={this.togglePersonsHandler}> Toggle Persons </button>
          {persons}          
      </div>
    );
  // JSX is rendered like the following below!  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
