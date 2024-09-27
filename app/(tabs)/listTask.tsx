import { Link } from "expo-router";
import React from "react";


import { View, Text, SafeAreaView, StyleSheet, Alert, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
export default function ListTask() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List Task</Text>

            <View style={styles.separator} />
            <Link href={'/task1'}>
                <Text>Task 1</Text>
            </Link>
            <Link href={'/task2'}>
                <Text>Task 2</Text>
            </Link>
            <Link href={'/task3'}>
                <Text>Task 3</Text>
            </Link>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})