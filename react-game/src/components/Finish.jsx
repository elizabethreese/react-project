import React from 'react';

const Finish = (props) => {
    return (
        <div className="Finish">
            <iframe src="https://giphy.com/embed/lNQt3pd5ERlCPMOQg4" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <iframe src="https://giphy.com/embed/lNQt3pd5ERlCPMOQg4" frameBorder="0" class="giphy-embed2" allowFullScreen></iframe>
            <iframe src="https://giphy.com/embed/lNQt3pd5ERlCPMOQg4" frameBorder="0" class="giphy-embed3" allowFullScreen></iframe>
            <h1>Congratulations! You Finished the Game!</h1> 
            <h2>Your Score: </h2> <strong>{props.score}</strong>
        </div>
    )};

export default Finish; 