import React from 'react';

let Button = (props) => {
    return (
        <div className="Button">
            <button class={props.class}>{props.text}</button>
        </div>
    )
}

export default Button;