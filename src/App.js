import React, { Component } from 'react';
import logo from './logo.svg';
import Repos from './containers/Repos';
import InputUser from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="logo" alt="logo" />
          <h1>Octolist</h1>
          <h2>List your Github Repos</h2>
        </header>
        <InputUser />
        <Repos />
      </div>
    );
  }
}

export default App;
