import React, {Component} from 'react';
import { createStackNavigator  } from 'react-navigation';

import Main from './components/main';

// Main, Detail, Search
// Detail, Search todo
const RootStack = createStackNavigator({
    Main: {screen: Main}
}, {
    initialRouteName: 'Main'
});

export default class App extends Component{
    render() {
        return <RootStack/>
    }
}