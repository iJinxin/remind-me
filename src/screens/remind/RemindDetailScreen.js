import React, { Component } from 'react';
import {
  View
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionHeader from '../../components/header/ActionHeader';
import RemindEditor from '../../components/remind/RemindEditor';

export default class RecordDetailScreen extends Component {
  render() {
    const leftData = [
      {
        type: 'icon',
        icon: <MaterialIcons name="arrow-back" size={24} />
      }
    ];
    const rightData = [
      {
        type: 'text',
        text: '123456'
      },
      {
        type: 'icon',
        icon: <MaterialIcons name="done" size={20} />
      }
    ];
    const actionHeader = <ActionHeader leftData={leftData} rightData={rightData} />;
    const remindEditor = <RemindEditor />;

    return (
      <View>
        {actionHeader}
        {remindEditor}
      </View>
    );
  }
}
