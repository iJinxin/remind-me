import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import HeadNavigator from '../../navigations/HeadNavigator';
import ActionButtons from '../../components/action-button/ActionButton';
import RemindList from '../../components/RemindList';

export default class RemindScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const statusBar = {
      backgroundColor: '#123'
    };
    const headNavigator = <HeadNavigator title="提醒" hide={false} statusBar={statusBar} />;
    const remindList = <RemindList />;
    const actionButtons = <ActionButtons style={styles.actionButtonIcon} />;
    return (
      <View style={styles.container}>
        {headNavigator}
        {remindList}
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
