/** @format */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/common/store/configureStore';
// import { LocalizationProvider } from './src/common/localization/LocalizationProvider';


import App from './src/App';

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
