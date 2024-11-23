import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to FitBite</Text>
            <TextInput placeholder="Your Email" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} />
            <Button title="Log In" onPress={() => navigation.navigate('Main')} />
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '80%', padding: 10, borderWidth: 1, marginBottom: 10 },
});

export default LoginScreen;
