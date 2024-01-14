import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "../utils";

export default function ExpenseItem({ data }) {
    return (
        <Pressable style={styles.expense}>
            <View>
                <Text style={{ fontWeight: "bold", color: Colors.dark_text, fontSize: 16 }}>{data.expense}</Text>
                <Text style={{ fontSize: 12 }}>2021-02-02</Text>
            </View>
            <Text style={styles.amt}>{data.amount}</Text>
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
        backgroundColor: Colors.white,
        borderRadius: 5,
        fontWeight: "bold",
        color: Colors.light_text,
        fontSize: 16,
    },
});
