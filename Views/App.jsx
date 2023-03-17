import { Text, SafeAreaView, View, Alert, TouchableOpacity, TouchableNativeFeedback, Platform, TouchableWithoutFeedback } from "react-native";
import { TouchableHighlight } from "react-native";

export function App() {
    // Eventos
    const onPressButton = () => {
        Alert.alert("Tap event", "Tap en highlight")
    }

    const onLongPressButton = () => {
        Alert.alert("Long press", "Mantuviste presionado el botón")
    }

    const buttonStyle = {
        padding: 8,
        margin: 5
    }

    // Color de fondo según Plataforma
    const osBackground = Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''


    return (
        <SafeAreaView>
            <Text>Sesión 6</Text>

            {/* Crear cuatro botones */}
            {/* Touchable Highlight: Enlace a una web */}
            {/* Touchable Native Feedback: ondas al hacer tap */}
            {/* Touchable opacity: reducir opacidad */}
            {/* Touchable Without Feedback: Gestos de toque sin efecto */}

            <View>
                {/* TouchableHighlight */}
                <TouchableHighlight onPress={onPressButton} underlayColor="white" style={buttonStyle}>
                    <View>
                        <Text>Touchable Highlight</Text>
                    </View>
                </TouchableHighlight>

                {/* TouchableOpacity */}
                <TouchableOpacity onPress={onPressButton} style={buttonStyle}>
                    <View>
                        <Text>Touchable Opacity</Text>
                    </View>
                </TouchableOpacity>

                {/* TouchableNativeFeedback */}
                <TouchableNativeFeedback onPress={onPressButton} style={buttonStyle} background={osBackground}>
                    <View>
                        <Text>Touchable Native Feedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                    </View>
                </TouchableNativeFeedback>

                {/* Touchable Without Feedback (Long press) */}
                <TouchableWithoutFeedback onPress={onPressButton} style={buttonStyle} onLongPress={onLongPressButton}>
                    <View>
                        <Text>Touchable Without Feedback</Text>
                    </View>
                </TouchableWithoutFeedback>

                {/* Touchable Highlight (Long press) */}
                <TouchableHighlight style={buttonStyle} onPress={onPressButton} onLongPress={onLongPressButton} underlayColor="white">
                    <View>
                        <Text>Touchable Highlight with Long Press</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

export default App
