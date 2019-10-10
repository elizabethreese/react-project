import React from "react";
import "./App.css";
import Button from "./components/Button.jsx/index.js";
import Resources from "./components/Resources.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="Button-area">
        <Button class="Restart-Button" text="Restart" />
        <Button class="Next-Button" text="Next Question" />
      </div>
      <div className="Resources-area">
        <Resources />
      </div>
    </div>
  );
}

export default App;
