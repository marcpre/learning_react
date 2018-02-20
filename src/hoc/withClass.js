/*
import React from 'react';

//instead of implementing the class directly
const withClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
    
);

export default withClass;

*/

//second way for hoc

import React from 'react';


const withClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
};

export default withClass;