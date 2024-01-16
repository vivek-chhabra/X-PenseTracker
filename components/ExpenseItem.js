import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "../utils";

export default function ExpenseItem({ data }) {
    const { expense, amount } = data;
    return (
        <Pressable style={styles.expense} onPress={() => console.log('working')}>
            <View>
                <Text style={{ fontWeight: "bold", color: Colors.dark_text, fontSize: 16 }}>{expense}</Text>
                <Text style={{ fontSize: 12 }}>2021-02-02</Text>
            </View>
            <Text style={styles.amt}>₹{amount.toFixed(2)}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {},
    expense: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: Colors.light_bg,
    },
    amt: {
        minWidth: 60,
        paddingVertical: 6,
        paddingHorizontal: 6,
        textAlign: "center",
        backgroundColor: Colors.dark_text,
        borderRadius: 5,
        fontWeight: "bold",
        color: Colors.light_bg,
        fontSize: 16,
    },
});
