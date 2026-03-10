import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcome}>Welcome Back, Arza!</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        
        <TextInput style={styles.input} placeholder="Username/Email" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#aaa" />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Don't have an account? <Text style={{fontWeight: 'bold'}}>Register</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#fff', padding: 30, borderRadius: 20, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 10 },
  welcome: { fontSize: 24, fontWeight: 'bold', color: '#1A1C1E', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#717679', textAlign: 'center', marginBottom: 30 },
  input: { backgroundColor: '#F1F3F5', padding: 15, borderRadius: 12, marginBottom: 15, fontSize: 16 },
  button: { backgroundColor: '#007AFF', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  linkText: { marginTop: 20, textAlign: 'center', color: '#007AFF' }
});