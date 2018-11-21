/**
 * create global navigator stack
 * Main: the home page
 */

import { createStackNavigator } from 'react-navigation';
// import config from '../common/config';
import { STACK } from '../common/constants';
import createHomeTabNavigator from './HomeTabNavigator';

const stackConfig = {
  headerMode: 'screen',
};
const createAppNavigator = () => {
  const AppNavigator = createStackNavigator(
    {
      [STACK.Main]: {
        screen: createHomeTabNavigator(),
        navigationOptions: {
          header: null
        }
      }
    },
    stackConfig
  );
  return AppNavigator;
};

export default createAppNavigator;
