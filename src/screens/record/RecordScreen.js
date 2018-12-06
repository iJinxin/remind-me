import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import HeadNavigator from '../../navigations/HeadNavigator';
import ActionButtons from '../../components/button/ActionButton';

export default class RecordScreen extends Component {
  render() {
    const statusBar = {
      backgroundColor: '#123'
    };
    const headNavigator = <HeadNavigator title="remind-me" hide={false} statusBar={statusBar} />;
    const actionButtons = <ActionButtons style={styles.actionButtonIcon} />;
    return (
      <View style={styles.container}>
        {headNavigator}
        {actionButtons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  actionButtonIcon: {
    flex: 1,
  }
});
