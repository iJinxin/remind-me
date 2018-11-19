import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 40
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 24,
        position: 'absolute',
        right: 10,
        top: 8
    }
});
export default class Header extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>
                    Remind Me
                </Text>
                <MaterialIcons name={'playlist-add'} style={style.icon}/>
            </View>
        )
    }
}