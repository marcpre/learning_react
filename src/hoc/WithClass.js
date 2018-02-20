import React from 'react';

//instead of implementing the class directly
const withClass = (props) => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;
