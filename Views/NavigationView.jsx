import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import View1 from './View1';

const Stack = createNativeStackNavigator()

function NavigationView() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='View1'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="View1" getComponent={View1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NavigationView
