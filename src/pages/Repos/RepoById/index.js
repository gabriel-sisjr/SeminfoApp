import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

// import { Container } from './styles';

export default function RepoById({ navigation }) {
    const repoById = navigation.getParam('item')
    const [x, setX] = React.useState(0);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: '98%', width: '98%', borderWidth: 1 }}>
                <View style={{ height: '30%', width: '100%', backgroundColor: 'pink' }} />
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hello React Native!!</Text>
            </View>
        </SafeAreaView>
    );
}
