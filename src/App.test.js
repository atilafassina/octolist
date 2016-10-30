import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import octolistApp from './reducers/index.js';
import './index.css';
import App from './App.js';



it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(octolistApp, applyMiddleware(thunk));

  ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>
  , div);
});
