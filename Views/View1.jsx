import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import OpenScreen from '../Components/OpenScreen';

function View1({ navigation }) {

    return (
        <SafeAreaView>
            <Text>View 1</Text>
            <OpenScreen label="Ir al home" screenName="Home" navigation={navigation} />
        </SafeAreaView>
    )
}
export default View1
