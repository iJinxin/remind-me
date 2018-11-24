// tab navigator for android;
import React from 'react';
// import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../screens/home/Home';
import Calendar from '../screens/canlendar/Calendar';
import Me from '../components/main/me';
import { SCREENS } from '../common/constants';


const createHomeTabNavigator = () => createBottomTabNavigator(
  {
    [SCREENS.Home]: {
      screen: Home,
      navigationOptions: () => ({
        tabBarLabel: '主页',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="home" size={20} style={{ color: tintColor }} />
        )
      })
    },
    [SCREENS.Calendar]: {
      screen: Calendar,
      navigationOptions: () => ({
        tabBarLabel: '日历',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="home" size={20} style={{ color: tintColor }} />
        )
      })
    },
    [SCREENS.Me]: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor }) => (
          <Feather name="user" size={20} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: SCREENS.Home,
    tabBarOptions: {
      activeTintColor: '#0084ff',
      inactiveTintColor: '#8590a6'
    },
  }
);

export default createHomeTabNavigator;
