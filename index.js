/** @format */
import { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';

import App from './src'

class Root extends Component {
    render() {
        <Provider store={store}>

        </Provider>
    }
}

AppRegistry.registerComponent(appName, () => Init);
