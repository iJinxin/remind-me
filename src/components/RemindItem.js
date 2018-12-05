/**
 * 提醒组件，可编辑，支持时间选择
 * @props
 * id
 * date
 * content
 * separators
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class RemindItem extends Component {
  render() {
    const {
      date,
      content,
      separators
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#ccc',
    shadowOffset: { h: 2 },
    paddingLeft: 18,
    paddingRight: 18,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 20,
    paddingBottom: 12
  },
  date: {
    fontSize: 12,
    paddingBottom: 12
  }
});
