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
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';

class RemindItem extends Component {
  constructor(props) {
    super(props);
  }

  goDetail() {
    // const navigation = this.props.navigation;
    Alert.alert(
      'hello',
      this.props,
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    );
    // this.props.navigation.navigate('RemindDetail');
  }

  render() {
    const {
      date,
      content,
      navigation
    } = this.props;
    return (
      <TouchableOpacity onPress={() => { navigation.navigate('RemindDetail'); }}>
        <View style={styles.container}>
          <Text style={styles.content}>{content}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(RemindItem);

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
