import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../utils";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ManageExpenses({ navigation, route }) {
    const { navigate } = navigation;
    const { data } = route.params;

    const handleDelete = async () => {
        let expensesData = await AsyncStorage.getItem("expenses");
        expensesData = JSON.parse(expensesData);
        expensesData = expensesData.filter((exp) => exp._id !== data._id);
        expensesData = JSON.stringify(expensesData);
        AsyncStorage.setItem("expenses", expensesData);
        navigation.navigate("bottomTabs");
    };

    const handleEdit = () => {
        navigate("addExpenses", { data });
    };

    return (
        <View style={styles.container}>
            <CustomButton title="Delete" handlerFunction={handleDelete} style={styles.button} />
            <CustomButton title="Edit" handlerFunction={handleEdit} style={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.dark_text,
        flexDirection: "row",
        gap: 20,
        justifyContent: "center",
    },
    button: {
        width: "45%",
        height: 40,
    },
});
