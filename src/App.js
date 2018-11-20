import React, { Component } from 'react';
import { Text } from 'react-native';
// import { connect } from 'react-redux';
// import { createStackNavigator } from 'react-navigation';

import createAppNavigator from './navigations/AppNavigator';
// import Main from './components/main';

class App extends Component {
  constructor(props) {
    super(props);
    const { initialRouteName } = props;
    this.appNavigator = createAppNavigator({
      initialRouteName,
    });
  }

  render() {
    return <Text>Hi</Text>;
  }
}

export default App;
