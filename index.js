/** @format */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducers from './src/common/reducers';

import App from './src/App';

const store = createStore(
  rootReducers,
  applyMiddleware(
    thunk,
    createLogger
  )
);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('remindme', () => Root);
