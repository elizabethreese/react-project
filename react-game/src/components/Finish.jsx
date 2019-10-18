import React from 'react';


const Finish = (props) => {
    return (
        <div className="Finish">
            <h1>Congratulations! You Finished the Game!</h1>
            <h2>Your Score: {props.score}</h2>
        </div>
    )};

export default Finish; 