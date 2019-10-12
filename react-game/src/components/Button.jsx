import React from 'react';

let Button = (props) => {
    return (
        <div className="Button">
            <button onClick={props.onClick} className={props.class}>{props.text}</button>
        </div>
    )
}

export default Button;