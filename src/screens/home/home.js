import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView bounces={false} scrollEventThrottle={1}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          {/* <Header/> */}
          <Text>Home Screen</Text>
          <Text>中文</Text>
          <Text>s</Text>
        </View>
      </ScrollView>
    );
  }
}
