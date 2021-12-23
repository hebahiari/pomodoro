import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";
import ProgressBar from "./pomodoro/ProgressBar";

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <Pomodoro ProgressBar={ProgressBar} />
      </div>
    </div>
  );
}

export default App;
