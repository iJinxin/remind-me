/**
 * create global navigator stack
 * Main: the home page
 */

import { createStackNavigator } from 'react-navigation';
// import config from '../common/config';
import { STACK } from '../common/constants';
import createHomeTabNavigator from './HomeTabNavigator';

const createAppNavigator = ({ initialRouteName }) => {
  const AppNavigator = createStackNavigator(
    {
      [STACK.Main]: {
        screen: createHomeTabNavigator({ initialRouteName }),
        navigationOptions: {
          header: null
        }
      }
    }
  );
  return AppNavigator;
};

export default createAppNavigator;
