import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import octolistApp from './reducers/index.js';
import App from './App.js';

describe('#loading the app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(octolistApp, applyMiddleware(thunk));

    ReactDOM.render(
      <Provider store={store}>
      <App />
    </Provider>
    , div);
  });
});

describe('#reducers', () => {
  it('type fetch', () => {
    const mockObj ={ type: 'FETCH'};

    const fetchResponse = {
      type: 'FETCH',
      isFetching: true
    };

    expect(octolistApp('test', mockObj)).toEqual(fetchResponse);
  });

  it('type new_repo', () => {
    const mockObj = {type: 'NEW_REPOS', repositories: [1,2,3,4,5]};

    const newReposResponse = {
      type: 'NEW_REPOS',
      repositories: [1,2,3,4,5],
      receivedAt: Date.now()
    };

    expect(octolistApp('test', mockObj)).toEqual(newReposResponse);
  });

  it('type no_user', () => {
    const mockObj = {type: 'NO_USER'};

    const noUserResponse = {
      type: 'NO_USER',
      msg: 'User does not exist'
    };

    expect(octolistApp('test', mockObj)).toEqual(noUserResponse);
  });

  it('type network_error', () => {
    const mockObj = {type: 'NETWORK_ERROR'};

    const netErrorResponse = {
      type: 'NETWORK_ERROR',
      msg: 'There is a problem with the request. Please try again.'
    };

    expect(octolistApp('test', mockObj)).toEqual(netErrorResponse);
  });
});
