/**
 * app容器
 * 初始化navigator stack
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  BackAndroid,
  Platform
} from 'react-native';
// import { connect } from 'react-redux';
// import { createStackNavigator } from 'react-navigation';

import createAppNavigator from './navigations/AppNavigator';
// import Main from './components/main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.appNavigator = createAppNavigator();
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      // BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  // android 按返回键
  onBackAndroid() {

  }

  render() {
    const Navigator = this.appNavigator;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="default"
        />
        <Navigator />
      </View>
    );
  }
}

export default App;
