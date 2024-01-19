import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "../utils";
import Ripple from "react-native-material-ripple";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ data }) {
    const { expenseText, expenseAmt, date } = data;
    const navigation = useNavigation();

    const handleEdit = () => {
        navigation.navigate("manageExpenses", { data });
    };

    return (
        <Ripple style={styles.expense} onPress={handleEdit}>
            <View style={{ width: "80%" }}>
                <Text style={{ fontWeight: "bold", color: Colors.dark_text, fontSize: 16 }}>{expenseText}</Text>
                <Text style={{ fontSize: 12, marginTop: 5, fontWeight: "bold", opacity: 0.5 }}>{date}</Text>
            </View>
            <Text style={styles.amt}>₹ {expenseAmt}</Text>
        </Ripple>
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
        marginBottom: 10,
        gap: 10,
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
