import { Platform } from 'react-native';

export default {

    // tab navigation on IOS, drawer navigation on android
    navigation: {
        tab: Platform.OS === 'ios'
    }
}