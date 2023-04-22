import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, AppState } from 'react-native';

// AppState

const Login=()=>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin=()=>{
    console.log(`username: ${username}, password: ${password}`);
    // tutaj możesz wysłać dane logowania do serwera
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Login;
