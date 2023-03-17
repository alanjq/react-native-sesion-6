import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';

function Home() {
    // Navegar a View 1
    const handleNavigation = () => {
        // navigation.navigate('View1')
    }

    return (
        <SafeAreaView>
            <Text>Navigation container</Text>

            <Button onPress={handleNavigation} title='Volver a view 1' />
        </SafeAreaView>
    )
}
export default Home
