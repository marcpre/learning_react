import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Maxddsdf', age: 24},
      { name: 'adf', age: 26}
    ],
    showPersons: false
  }
  

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'newName', age: 28},
        { name: event.target.value, age: 9999999},
        { name: 'lolonator', age: 26}
    ]
   })
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
    
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Maxddsdf', age: 9999999},
        { name: 'lolonator', age: 26}
    ]
   })
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
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} />
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age} 
          changed = {this.nameChangeHandler}/>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age} 
          click={this.switchNameHandler} >
            In the above paragraph the button switched gets also triggered.
        </Person>
      </div> 
      );
    }

    return ( 
    <div className = "App" >
      <h1 > Hi, I am a react app. </h1>  
        <button 
        style={style}
        onClick={this.togglePersonsHandler}> Switch Name 
        </button>
        {persons}          
      </div>
    );
  }
}

export default App;
