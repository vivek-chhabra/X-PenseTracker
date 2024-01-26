import { View, StyleSheet, Pressable } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import AllExpScreen from "./screens/AllExpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./utils";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import ManageExpenses from "./screens/ManageExpenses";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
    const Stack = createNativeStackNavigator();
    const BottomTab = createBottomTabNavigator();

    const data = { expenseText: "", expenseAmt: "" };
    const headerIcon = (navigation) => {
        return (
            <Pressable style={styles.icon} onPress={() => navigation.navigate("addExpenses")}>
                <Ionicons name="add-circle-outline" color={Colors.dark_text} style={{ fontSize: 30, color: Colors.light_bg, textAlign: "center", left: 1, bottom: 1 }} />
            </Pressable>
        );
    };

    const BottomTabsNavigator = () => {
        return (
            <BottomTab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: Colors.light_bg },
                    headerStyle: { backgroundColor: Colors.light_bg },
                    headerTintColor: Colors.dark_text,
                    headerTitleStyle: { fontWeight: "bold" },
                }}>
                <BottomTab.Screen
                    name="All Expenses"
                    component={AllExpScreen}
                    options={({ navigation }) => ({
                        headerRight: () => headerIcon(navigation),
                        tabBarIcon: ({ focused, size, color }) => {
                            return (
                                <View style={focused && { width: "93%", paddingVertical: 5, backgroundColor: Colors.dark_text, borderRadius: 10, alignItems: "center" }}>
                                    <Ionicons name="hourglass-outline" color={focused ? Colors.light_bg : Colors.dark_text} size={size} />
                                </View>
                            );
                        },
                    })}
                />
                <BottomTab.Screen
                    name="Recent Expenses"
                    component={AllExpScreen}
                    options={{
                        tabBarIcon: ({ focused, size, color }) => {
                            return (
                                <View style={focused && { width: "93%", paddingVertical: 5, backgroundColor: Colors.dark_text, borderRadius: 10, alignItems: "center" }}>
                                    <Ionicons name="calendar" color={focused ? Colors.light_bg : Colors.dark_text} size={size} />
                                </View>
                            );
                        },
                    }}
                />
            </BottomTab.Navigator>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        animation: "slide_from_right",
                    }}>
                    <Stack.Screen
                        name="bottomTabs"
                        component={BottomTabsNavigator}
                        options={({ navigation }) => ({
                            headerShown: false,
                            headerTintColor: Colors.dark_text,
                            headerStyle: { backgroundColor: Colors.light_bg },
                        })}
                    />
                    <Stack.Screen
                        name="addExpenses"
                        component={AddExpenseScreen}
                        options={({ navigation }) => ({
                            title: "Add Expenses Below",
                            headerTitleAlign: "center",
                            headerTintColor: Colors.dark_text,
                            headerStyle: { backgroundColor: Colors.light_bg },
                        })}
                    />
                    <Stack.Screen
                        name="manageExpenses"
                        component={ManageExpenses}
                        options={({ navigation }) => ({
                            title: "Edit Expense Below",
                            headerTitleAlign: "center",
                            headerTintColor: Colors.dark_text,
                            headerStyle: { backgroundColor: Colors.light_bg },
                            animation: "slide_from_bottom",
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: Colors.dark_text,
        borderRadius: 50,
        justifyContent: "center",
        right: 15,
    },
    tabIcon: {
        fontSize: 25,
    },
});
