/**
 * home page container
 */
import React from 'react';
import {
  View,
} from 'react-native';
import HeadNavigator from '../../navigations/HeadNavigator';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const statusBar = {
      backgroundColor: '#123',
    };
    // const headNavigator = <HeadNavigator title="Home" hide={false} statusBar={statusBar} />;
    return (
      <View>
        <HeadNavigator title="Home" hide={false} statusBar={statusBar} />
      </View>
    );
  }
}
