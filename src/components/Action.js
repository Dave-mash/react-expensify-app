import React from 'react';

const Action = (props) => (
    <div>
        <button 
            disabled={!props.disable}
            onClick={props.handlePick}
        >
        What should I do?</button>
        <button onClick={props.handleRemoveAll}>Remove all</button>         
    </div>
);

export default Action;