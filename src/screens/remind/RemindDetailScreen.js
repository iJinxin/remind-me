import React, { Component } from 'react';
import {
  View
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeadNavigator from '../../navigations/HeadNavigator';
import ActionHeader from '../../components/header/ActionHeader';
import RemindEditor from '../../components/remind/RemindEditor';

export default class RecordDetailScreen extends Component {
  render() {
    const leftData = [
      {
        type: 'icon',
        icon: <MaterialIcons name="arrow-back" />
      }
    ];
    const rightData = [
      {
        type: 'icon',
        icon: <MaterialIcons name="delete" />
      },
      {
        type: 'icon',
        icon: <MaterialIcons name="done" />
      }
    ];
    const statusBar = {
      backgroundColor: '#123'
    };
    // const headNavigator = <HeadNavigator title="提醒" hide={false} statusBar={statusBar} />;
    const actionHeader = <ActionHeader />;
    const remindEditor = <RemindEditor />;

    return (
      <View>
        {actionHeader}
        {remindEditor}
      </View>
    );
  }
}
