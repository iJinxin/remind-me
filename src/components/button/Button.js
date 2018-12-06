/**
 * 提供普通button
 * @props data
 * type: icon|text
 * handler
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class NavBarButton extends Component {
  render() {
    const {
      type, icon, text, style, handler
    } = this.props;
    return (
      type === 'icon'
        ? (
          <TouchableOpacity style={style} onPress={handler}>
            <View>
              {icon}
            </View>
          </TouchableOpacity>
        )
        : (
          <TouchableOpacity style={style} onPress={handler}>
            <Text>
              {text}
            </Text>
          </TouchableOpacity>
        )
    );
  }
}
export const getButtonElement = (data = {}, style) => (
  <View>
    {data.type === 'none' ? null : (
      <NavBarButton
        type={data.type}
        icon={data.icon}
        text={data.text}
        style={style}
        handler={data.handler}
      />
    )}
  </View>
);
