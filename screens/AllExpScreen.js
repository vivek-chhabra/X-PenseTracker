import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "../components/ExpenseItem";
import { Colors, getSum } from "../utils";

const data = [
    { expense: "A book", amount: 50.5 },
    { expense: "A cake", amount: 55 },
    { expense: "A bat", amount: 5.5 },
    { expense: "A banana", amount: 7.5 },
];
export default function AllExpScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.total}>
                <Text style={styles.totalStyle}>Total</Text>
                <Text style={styles.totalStyle}>₹ {getSum(data, "amount")}</Text>
            </View>
            <FlatList data={data} renderItem={({ item }) => <ExpenseItem data={item} />} contentContainerStyle={styles.listStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark_text,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    total: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: 50,
        marginBottom: 20,
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.light_bg,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    listStyle: {
        flexDirection: "column",
        gap: 10,
        // paddingHorizontal: 15,
        // paddingVertical: 20,
        backgroundColor: Colors.dark_text,
        height: "100%",
    },
    totalStyle: { fontSize: 16, fontWeight: "bold", color: Colors.white },
});
