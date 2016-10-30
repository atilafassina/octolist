import React, { Component } from 'react';
import logo from './logo.svg';
import Repos from './containers/Repos.js';
import InputUser from './form.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>List your Github Repos</h2>
        </div>
        <InputUser />
        <Repos />
      </div>
    );
  }
}

export default App;
