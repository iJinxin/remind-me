// tab navigator for android;
import React from 'react';
// import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
// import Feather from 'react-native-vector-icons/Feather';

// import HomeScreen from '../screens/home/HomeScreen';
// import CalendarScreen from '../screens/canlendar/CalendarScreen';
// import Me from '../screens/me/MeScreen';
import RemindScreen from '../screens/remind/RemindScreen';
import RecordScreen from '../screens/record/RecordScreen';
import { SCREENS } from '../common/constants';


const createHomeTabNavigator = () => createBottomTabNavigator(
  {
    [SCREENS.Remind]: {
      screen: RemindScreen,
      navigationOptions: () => ({
        tabBarLabel: '提醒',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="home" size={20} style={{ color: tintColor }} />
        )
      })
    },
    [SCREENS.Record]: {
      screen: RecordScreen,
      navigationOptions: () => ({
        tabBarLabel: '记录',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="home" size={20} style={{ color: tintColor }} />
        )
      })
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
