import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
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
    this.appNavigator = createAppNavigator({
      initialRouteName,
    });
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
    const renderComponent = (
      <Navigator
        screenProps={{}}
      />
    );
    return (
      <ScrollView style={styles.container}>
        <Text>this is home page</Text>
        {renderComponent}
      </ScrollView>
    );
  }
}

export default App;
