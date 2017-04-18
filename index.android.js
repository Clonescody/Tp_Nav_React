import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeView extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Presentation')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

class PresentationView extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

const App = StackNavigator({
    Home: {screen: HomeView},
    Presentation: {screen: PresentationView}
});

AppRegistry.registerComponent('TpNavigator4_4_2', () => App);
