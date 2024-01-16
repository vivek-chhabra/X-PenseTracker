import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "../components/ExpenseItem";
import { Colors, getSum } from "../utils";

const data = [
    { expense: "A book", amount: 50.556 },
    { expense: "A cake", amount: 55 },
    { expense: "A bat", amount: 5.5 },
    { expense: "A banana", amount: 70.55 },
];

export default function AllExpScreen() {
    return (
        <View style={styles.container}>
            {data?.length !== 0 ? (
                <>
                    <View style={styles.total}>
                        <Text style={styles.totalStyle}>Total :</Text>
                        <Text style={{ ...styles.totalStyle, minWidth: 70, backgroundColor: Colors.dark_text, textAlign: "center", padding: 5, borderRadius: 50, color: Colors.light_bg }}>₹ {getSum(data, "amount").toFixed(2)}</Text>
                    </View>
                    <FlatList data={data} renderItem={({ item }) => <ExpenseItem data={item} />} contentContainerStyle={styles.listStyle} />
                </>
            ) : (
                <View style={{ height: "100%" }}>
                    <Text style={styles.noExp}>There are currently no expenses recorded. Feel free to click 'Add Icon' to input a new one.</Text>
                </View>
            )}
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
        padding: 8,
        paddingHorizontal: 10,
        backgroundColor: Colors.light_bg,
        borderWidth: 2,
        borderColor: Colors.white,
    },
    listStyle: {
        flexDirection: "column",
        gap: 10,
        backgroundColor: Colors.dark_text,
        height: "100%",
    },
    totalStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.white,
    },
    noExp: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: Colors.light_bg,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.dark_text,
        lineHeight: 25,
    },
});
