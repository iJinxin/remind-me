import React from 'react';
import {createBottomTabNavigator, TabNavigator} from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import Malteriallcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './main/home';
import ScheduleScreen from './main/schedule';
import MeScreen from './main/me';

export default createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '主页1',
            showLabel: false,
            tabBarIcon: ({tintColor, focused }) => (
                <Entypo name={'home'} size={20} style={{color: tintColor}}/>
            )
        }
    },
    Schedule: {
        screen: ScheduleScreen,
        navigationOptions: {
            tabBarLabel: '日程',
            tabBarIcon: ({focused, horizontal, tintColor}) => (
                <Malteriallcons name={'schedule'} size={20} color={tintColor}/>
            )
        }
    },
    Me: {
        screen: MeScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({focused, horizontal, tintColor}) => (
                <Feather name="user" size={20} color={tintColor}/>
            ),
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true,
        style: {
            height: 50
        },
        labelStyle: {
            fontSize: 15
        }
    },
    initialRouteName: 'Home'
});