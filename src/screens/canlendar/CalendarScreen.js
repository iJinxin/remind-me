import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import HeadNavigator from '../../navigations/HeadNavigator';
import ActionButtons from '../../components/action-button/ActionButton';
import Calendars from '../../components/calendar/Calendars';

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const statusBar = {
      backgroundColor: '#123',
    };
    const headNavigator = <HeadNavigator title="calendar" hide={false} statusBar={statusBar} />;
    const actionButtons = <ActionButtons style={styles.actionButtonIcon} />;
    const calendars = <Calendars />;
    return (
      <View style={styles.container}>
        {headNavigator}
        {calendars}
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
