import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Me extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>中文</Text>
                <Text>s</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}
