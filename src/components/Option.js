import React from 'react';

const Option = (props) => (
    <div>
        {props.optionTask}
        <button 
            onClick={(e) => props.handleRemove(props.optionTask)}
        >
            remove
        </button>
    </div>
);

export default Option;