import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import OpenScreen from '../Components/OpenScreen';

function Home({navigation}) {

    return (
        <SafeAreaView>
            <Text>Home</Text>
            <OpenScreen navigation={navigation} label="Abrir View 1" screenName="View 1" />
        </SafeAreaView>
    )
}
export default Home
