import { View, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { Colors } from "../utils";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddExpenseScreen({ route, navigation }) {
    const { data } = route.params;

    const [expenseText, setExpenseText] = useState(data?.expenseText || "");
    const [expenseAmt, setExpenseAmt] = useState(data?.expenseAmt || "");

    const handleSubmit = async () => {
        const date = new Date();
        if (!expenseText || !expenseAmt) {
            Alert.alert("Error", "Expense description and amount should not be empty!", [{ text: "okay", style: "cancel" }]);
            return;
        }
        let expensesData = await AsyncStorage.getItem("expenses");
        if (expensesData) {
            expensesData = JSON.parse(expensesData);
            expensesData = data ? [{...data, expenseText, expenseAmt}, ...expensesData.filter(exp => exp._id !== data._id)] : [{ expenseText, expenseAmt, date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`, _id: Math.random() }, ...expensesData];
            expensesData = JSON.stringify(expensesData);
            AsyncStorage.setItem("expenses", expensesData);
        } else {
            expensesData = [{ expenseText, expenseAmt, date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`, _id: Math.random() }];
            expensesData = JSON.stringify(expensesData);
            AsyncStorage.setItem("expenses", expensesData);
        }
        navigation.navigate("bottomTabs");
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Expense Description..." onChangeText={(text) => setExpenseText(text.removeFrontSpaces())} value={expenseText} style={styles.input} cursorColor={Colors.dark_text} />
            <TextInput placeholder="Expense Amount..." onChangeText={(text) => setExpenseAmt(text.replace(/^[0]\d*$/, "").trim())} value={expenseAmt} style={styles.input} keyboardType="number-pad" cursorColor={Colors.dark_text} />
            <CustomButton title={data ? "Edit" : "Submit"} handlerFunction={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: Colors.dark_text,
        gap: 15,
    },
    input: {
        width: "100%",
        backgroundColor: Colors.light_bg,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        color: Colors.dark_text,
        fontWeight: 'bold'
    },
});
