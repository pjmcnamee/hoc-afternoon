import React, { Component } from 'react';
import './App.css';
import CurrencyHOC from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Higher Order Components</h2>
        <CurrencyHOC />
      </div>
    );
  }
}

export default App;
