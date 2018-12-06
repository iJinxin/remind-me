/**
 * 渲染提醒列表
 * @props
 * data，Array
 */
import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
// import Data from '../api/data';
import RemindItem from './RemindItem';
import Data from '../../api/data';

export default class RemindList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    this.state.items = Data.remindMeData();
  }

  renderItem = ({ item, separators }) => (
    <RemindItem
      key={item.id}
      date={item.date}
      content={item.content}
      separators={separators}
    />
  );

  render() {
    const data = this.state.items;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
      />
    );
  }
}
