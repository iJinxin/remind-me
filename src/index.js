import React, {Component} from 'react';
import { createStackNavigator  } from 'react-navigation';

import Main from './components/main';

// Main, Detail, Search
// Detail, Search todo
const RootStack = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'home'
        },
        title: '123'
    }
}, {
    initialRouteName: 'Main',
    headerMode: 'screen'
});

export default class App extends Component{
    render() {
        return <RootStack/>
    }
}