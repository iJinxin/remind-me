import { createStackNavigator } from 'react-navigation';
import config from '../common/config';
import { SCREENS } from "../common/constants";

const createAppNavigator = ({ routeName}) => {
    const AppNavigator = createStackNavigator(
        {
            [SCREENS.HOME]: {
                screen: config.navigation.tab
            }
        }
    )
};