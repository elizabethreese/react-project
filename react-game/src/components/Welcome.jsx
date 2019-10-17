import React from 'react';


const Welcome = (props) => {
    return (
       
       <div className="Welcome">
            <h1>Ready to ace your React Developer Interview?</h1>
            <h2>Test you knowledge with our quiz to see how prepared you really are.</h2>
          <button onclick={props.startGame} class="Start-button">Start the Game!</button>
        </div>
        
    )}

export default Welcome; 
