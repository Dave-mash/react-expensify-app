import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {props.tasks.length === 0 && <p>Please add a task to start!</p>}
        {
            props.tasks.map((task) => (
                <Option 
                    key={task} 
                    optionTask={task}
                    handleRemove={props.handleRemove} 
                />
            ))
        }
    </div>
);

export default Options;