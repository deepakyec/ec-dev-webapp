import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
			 <h1 className="App-title">Welcome to EC Dev Web App...</h1>
        </p>
      </div>
    );
  }
}

export default App;
