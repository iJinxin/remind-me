// tab navigator for android;
import React from 'react';
// import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
// import Feather from 'react-native-vector-icons/Feather';

// import HomeScreen from '../screens/home/HomeScreen';
// import CalendarScreen from '../screens/canlendar/CalendarScreen';
// import Me from '../screens/me/MeScreen';
import RemindMeScreen from '../screens/remind-me/RemindMeScreen';
import NoteScreen from '../screens/note/NoteScreen';
import { SCREENS } from '../common/constants';


const createHomeTabNavigator = () => createBottomTabNavigator(
  {
    [SCREENS.Home]: {
      screen: RemindMeScreen,
      navigationOptions: () => ({
        tabBarLabel: '提醒',
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="home" size={20} style={{ color: tintColor }} />
        )
      })
    },
    [SCREENS.Calendar]: {
      screen: NoteScreen,
      navigationOptions: () => ({
        tabBarLabel: '日历',
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
