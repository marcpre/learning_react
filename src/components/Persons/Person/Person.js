import React from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux';

const Person = (props) => {
    return (
      <Aux>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
      </Aux>
    )
}

//export default person;
export default withClass(Person, classes.Person);

