import React from 'react';
import { Alert, Button, View } from 'react-native';

function OpenScreen({ navigation, screenName, label }) {
    // Navegar a View 1
    const handleNavigation = () => {
        Alert.alert("Navigation", "Abrir " + screenName)
        // navigation.navigate(screenName)
    }
    return (
        <View>
            <Button onPress={handleNavigation} title={label} />
        </View>
    )
}
export default OpenScreen
