import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet, Alert, TouchableOpacity } from "react-native";


export default function Task1() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>

      <Text> User Name</Text>
      <TextInput placeholder="Username" id="username-input" style={styles.inputBox} onChangeText={(text) => setUserName(text)} />
      <View style={{ marginTop: 10 }}>

        <Text> Password</Text>
        <TextInput placeholder="Password" id="password-input" style={styles.inputBox} secureTextEntry onChangeText={(text) => setPassword(text)} />

      </View>
      <TouchableOpacity id="login-button" style={[styles.button, { backgroundColor: !userName || !password ? '#DDDDDD' : '#0a7ea4' }]} disabled={!userName || !password}>
        <Text style={{ color: !userName || !password ? 'black' : '#ffff' }}> Submit</Text>
      </TouchableOpacity>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 4,
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  }
})