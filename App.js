import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AllExpScreen from "./screens/AllExpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="expenses" component={AllExpScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
