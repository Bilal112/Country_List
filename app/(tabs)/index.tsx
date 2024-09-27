import React from "react";
import {View,Text} from 'react-native'
import ListTask from "./listTask";

export default function TabOneScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ListTask/>
        </View>
    );
}