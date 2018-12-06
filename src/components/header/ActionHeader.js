/**
 * 需要在header操作时使用
 * @props
 * leftData, Array
 * rightData, Array
 * 对任意item：type: icon|text, type=icon => icon, style, handler(function)
 */
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import { getButtonElement } from '../button/Button';

export default class ActionHeader extends Component {
  renderItem = ({ item }) => (
    <View>{getButtonElement(item)}</View>
  );

  render() {
    const leftActions = (
      <FlatList
        data={this.props.leftData}
        horizontal
        renderItem={this.renderItem}
      />
    );
    const rightActions = (
      <FlatList
        data={this.props.rightData}
        horizontal
        renderItem={this.renderItem()}
      />
    );
    return (
      <View style={styles.container}>
        {leftActions}
        {rightActions}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
