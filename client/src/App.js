import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wizard from './components/Wizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wizard />
      </div>
    );
  }
}

export default App;
