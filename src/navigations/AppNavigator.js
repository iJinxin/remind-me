/**
 * create global navigator stack
 * Main: the home page
 */

import { createStackNavigator } from 'react-navigation';
// import config from '../common/config';
import { STACK } from '../common/constants';
import createHomeTabNavigator from './HomeTabNavigator';
import RemindDetailScreen from '../screens/remind/RemindDetailScreen';
// import RecordDetailScreen from '../screens/record/RecordDetailScreen';

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
      },
      [STACK.RemindDetail]: {
        screen: RemindDetailScreen,
        navigationOptions: {
          header: null
        }
      },
      // [STACK.RecordDetail]: {
      //   screen: RecordDetailScreen,
      //   navigationOptions: {
      //     header: null
      //   }
      // }
    },
    stackConfig
  );
  return AppNavigator;
};

export default createAppNavigator;
