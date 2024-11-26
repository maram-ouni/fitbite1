import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/Button'; // Importez le bouton personnalisé
import Button2 from '../../components/Button2'; // Importez le bouton personnalisé

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            
            <Text style={styles.title}>Welcome to FitBite</Text>

            {/* Email input */}
            <TextInput 
                placeholder="Your Email" 
                style={styles.input} 
                keyboardType="email-address" 
            />
            {/* Password input */}
            <TextInput 
                placeholder="Password" 
                secureTextEntry 
                style={styles.input} 
            />

            {/* Login button (utilisation du bouton personnalisé Button2) */}
            <Button 
                title="Log in" 
                onPress={() => navigation.navigate('Main')} 
                style={styles.button} 
            />
            <Button2 
                title="Sign up" 
                onPress={() => navigation.navigate('signup')} 
                style={styles.button} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#006D77',
        marginBottom: 30,
    },
    input: {
        width: '90%',
        padding: 10,
        fontSize: 16,
        marginBottom: 20,
        borderBottomWidth: 1, // Ajout de la ligne sous le champ
        borderColor: '#006D77', // Couleur de la ligne sous le champ
        backgroundColor: 'transparent', // Pour ne pas avoir de fond sur le champ
    },
    button: {
        marginBottom: 10,
        marginTop:15,
    },
    buttonSecondary: {
        backgroundColor: '#ffccbc',
        paddingVertical: 12,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    socialContainer: {
        width: '100%',
        marginTop: 20,
    },
    socialButton: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        alignItems: 'center',
        marginBottom: 10,
    },
    socialText: {
        fontSize: 16,
        color: '#83C5BE',
    },
});

export default LoginScreen;
