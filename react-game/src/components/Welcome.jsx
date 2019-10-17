import React from 'react';


const Welcome = (props) => {
    return (
       
       <div className="Welcome">
            <h1>Ready to ace your React Interview?</h1>
            <h2>Test you knowledge with our quiz to see how prepared you really are.</h2>
            <img src={process.env.PUBLIC_URL + '/cartoon.png'}></img>
          <button onClick={props.startGame} className="Start-button">Start the Game!</button>
        </div>
        
    )}

export default Welcome; 
