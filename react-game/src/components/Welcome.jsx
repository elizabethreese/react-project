import React from 'react';


const Welcome = (props) => {
    return (
       
       <div className="Welcome">
            <h1>Ready to ace your React Interview?</h1>
            <h2>Test you knowledge with our quiz to see how prepared you really are.</h2>
            <button onClick={props.startGame} className="Start-button">Start the Game!</button>
            <br />
            <img src={process.env.PUBLIC_URL + '/cartoon.png'}></img>
            
        </div>
        
    )}

export default Welcome; 
