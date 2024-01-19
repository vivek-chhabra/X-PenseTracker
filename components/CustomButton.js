import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils";

export default function CustomButton({ title, style, handlerFunction }) {
    return (
        <Pressable style={[styles.container, style]} onPress={handlerFunction}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: Colors.light_bg,
        top: 20,
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.dark_text,
    },
});
