import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView, Keyboard } from 'react-native';
import Button from '../../components/Button'; // Importez le bouton personnalisé
import Button2 from '../../components/Button2'; // Importez le bouton personnalisé

const LoginScreen = ({ navigation }) => {
    const [logoSize, setLogoSize] = useState(250); // Taille par défaut du logo
    const [logoPosition, setLogoPosition] = useState(0); // Position par défaut du logo
    const [titlePosition, setTitlePosition] = useState(0); // Position par défaut du titre

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setLogoSize(150); // Réduire la taille du logo
            setLogoPosition(40); // Descendre le logo
            setTitlePosition(25); // Descendre le titre
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setLogoSize(250); // Restaurer la taille du logo
            setLogoPosition(0); // Restaurer la position du logo
            setTitlePosition(0); // Restaurer la position du titre
        });

        // Nettoyer les listeners à la fin du cycle de vie
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {/* Logo */}
            <Image 
                source={require('../../assets/images/logo.png')} 
                style={[
                    styles.logo, 
                    { width: logoSize, height: logoSize, transform: [{ translateY: logoPosition }] }
                ]} 
            />
            
            {/* Title */}
            <Text 
                style={[
                    styles.title, 
                    { transform: [{ translateY: titlePosition }] }
                ]}
            >
                Welcome to FitBite
            </Text>

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

            {/* Login button */}
            <Button 
                title="Log in" 
                onPress={() => navigation.navigate('Main')} 
                style={styles.button} 
            />
            <Button2 
                title="SignUp" 
                onPress={() => navigation.navigate('SignUp')} 
                style={styles.button} 
            />
        </KeyboardAvoidingView>
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
        borderBottomWidth: 1,
        borderColor: '#006D77',
        backgroundColor: 'transparent',
    },
    button: {
        marginBottom: 10,
        marginTop: 15,
    },
});

export default LoginScreen;
