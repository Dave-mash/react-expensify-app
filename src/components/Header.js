import React from 'react';


const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <p>{props.subtitle}</p>}
    </div>
);

Header.defaultProps = {
    title: 'Task Manager'
}

export default Header;