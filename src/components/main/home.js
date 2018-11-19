import React from 'react';
import { Button, View, Text } from 'react-native';
import Header from './header'
import request from '../../api/request';
import API_URL from '../../api/url'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // console.log('start');
        // request.get(API_URL.example).then((res) => {
        //     console.log(res);
        // })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Header/>
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
