import React, { Component } from 'react';
import DrumMachine from './DrumMachine';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrumMachine className="drum-machine"/>
      </div>
    );
  }
}

export default App;
