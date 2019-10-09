import React from 'react';
import './App.css';
import Buttons from './components/Buttons.jsx'
import Resources from './components/Resources.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    <div className="Button-area">
      <Buttons />
    </div>
    <div className="Resources-area">
      <Resources />
    </div>
    </div>
  );
}

export default App;
