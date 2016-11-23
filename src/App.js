import React, { Component } from 'react';
import logo from './logo.svg';
import InputUser from './components/input';
import RepoList from './components/RepoList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      repos: null
    }
  }

  repos(event) {
    event.preventDefault();
    const form = event.target.parentNode;
    const username = form.querySelector('input').value;

    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => {
        return response.json();
    }).then(json => {
        this.setState({
          repos: json
        });
    })
    .catch(error => { console.error('something has gone wrong', error); });
}

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <a href="https://github.com/atilafassina/octolist" target="_blank">
            <img src={logo} className="logo" alt="logo" />
            <h1>Octolist</h1>
          </a>
          <h2>List your Github Repos</h2>
        </header>
        <InputUser getRepo={this.repos.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div>
    );
  }
}

export default App;
