// tab navigator for android;
import React from 'react';
// import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from '../screens/home/home';
import Me from '../components/main/me';
import { SCREENS } from '../common/constants';


const createHomeTabNavigator = ({ initialRouteName }) => createBottomTabNavigator(
  {
    [SCREENS.Home]: {
      screen: Home,
      navigationOptions: ({ screenProps: { i18n } }) => ({
        tabBarLabel: '主页'
      })
    },
    [SCREENS.Me]: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: '我'
      }
    }
  },
  {
    initialRouteName: `${initialRouteName}`,
    headerMode: 'none',
    lazy: true,
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
    },
  }
);

export default createHomeTabNavigator;
