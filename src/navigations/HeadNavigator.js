/**
 * 窗口头部
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

export default class HeadNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getButtonElement(data = {}, style) {
    return (
      <View style={styles.navigatorButton}>
        <NavigatorButton
          title={data.title}
          style={[data.style, style]}
          tintColor={data.tintColor}
          handler={data.handler}
        />
      </View>
    );
  }

  render() {
    const statusBar = !this.props.statusBar.hidden
      ? (
        <View style={styles.statusBar}>
          <StatusBar {...this.props.statusBar} />
        </View>
      ) : null;

    const content = !this.props.hide
      ? (
        <View style={styles.navBar}>
          {this.getButtonElement(this.props.leftButton)}
          <Text>{this.props.title}</Text>
          {this.getButtonElement(this.props.rightButton)}
        </View>
      ) : null;

    return (
      <View style={styles.container}>
        {statusBar}
        {content}
      </View>
    );
  }
}
class NavigatorButton extends Component {
  render() {
    const {
      style, tintColor, title, handler
    } = this.props;
    return (
      <TouchableOpacity style={styles.navigatorButton}>
        <View style={style}>
          <Text style={[styles.title, { color: tintColor }]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4caf50'
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  statusBar: {
    height: 0
  },
  navigatorButton: {
    alignItems: 'center'
  }
});
