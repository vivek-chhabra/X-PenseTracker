import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ExpenseItem from "../components/ExpenseItem";
import { Colors, getSum } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function AllExpScreen({ navigation, route }) {
    const [AllExpenses, setAllExpenses] = useState([]);

    useFocusEffect(() => {
        (async () => {
            let date = new Date();
            date = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
            const res = await AsyncStorage.getItem("expenses");
            data = JSON.parse(res);
            data = route.name === "Recent Expenses" ? data.filter((exp) => exp.date === date) : data;
            setAllExpenses(data);
        })();
    });

    return (
        <View style={styles.container}>
            {AllExpenses?.length > 0 ? (
                <>
                    <View style={styles.total}>
                        <Text style={styles.totalStyle}>Total :</Text>
                        <Text style={{ ...styles.totalStyle, minWidth: 70, backgroundColor: Colors.dark_text, textAlign: "center", padding: 5, borderRadius: 50, color: Colors.light_bg, paddingHorizontal: 10 }}>₹ {getSum(AllExpenses, "expenseAmt").toFixed(2)}</Text>
                    </View>
                    <ScrollView>
                        {AllExpenses?.map((ele) => (
                            <ExpenseItem data={ele} />
                        ))}
                    </ScrollView>
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
        flex: 1,
        flexGrow: 1,
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
        color: Colors.dark_text,
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
