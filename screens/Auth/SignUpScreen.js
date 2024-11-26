import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button'; // Import du composant Button

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordContainsNumber, setIsPasswordContainsNumber] = useState(false);
    const [activeField, setActiveField] = useState(null); // Gère l'état actif des champs
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // État pour gérer la visibilité du mot de passe

    // Validation de l'email avec une expression régulière
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setIsPasswordValid(text.length >= 6); // Vérifie si le mot de passe a au moins 6 caractères
        setIsPasswordContainsNumber(/\d/.test(text)); // Vérifie si le mot de passe contient un chiffre
    };

    const handleSignUp = () => {
        if (!isValidEmail(email)) {
            Alert.alert('Error', 'Please enter a valid email address!');
            return;
        }

        if (!isPasswordValid || !isPasswordContainsNumber) {
            Alert.alert('Error', 'Password does not meet requirements!');
            return;
        }

        navigation.navigate('Login');
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible); // Bascule la visibilité du mot de passe
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.heading}>Welcome!</Text>
                <Text style={styles.subHeading}>Please enter your account here</Text>

                {/* Champ Email */}
                <View
                    style={[
                        styles.inputContainer,
                        activeField === 'email' && styles.inputContainerActive, // Applique la bordure rose si actif
                    ]}
                >
                    <Icon name="mail-outline" size={20} color="#E29578" />
                    <TextInput
                        style={styles.input}
                        placeholder="Email or phone number"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        onFocus={() => setActiveField('email')} // Active l'état au focus
                        onBlur={() => setActiveField(null)} // Désactive l'état au blur
                    />
                </View>

                {/* Champ Password */}
                <View
                    style={[
                        styles.inputContainer,
                        activeField === 'password' && styles.inputContainerActive, // Applique la bordure rose si actif
                    ]}
                >
                    <Icon name="lock-closed-outline" size={20} color="#E29578" />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={handlePasswordChange}
                        secureTextEntry={!isPasswordVisible} // Si isPasswordVisible est true, le mot de passe est visible
                        onFocus={() => setActiveField('password')} // Active l'état au focus
                        onBlur={() => setActiveField(null)} // Désactive l'état au blur
                    />
                    <Icon
                        name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color="#E29578"
                        onPress={togglePasswordVisibility} // Bascule la visibilité du mot de passe
                        style={styles.eyeIcon} // Ajout de la classe de style
                    />
                </View>

                {/* Section pour les exigences du mot de passe */}
                <Text style={styles.requirementsTitle}>Your password must contain:</Text>
                <View style={styles.passwordValidation}>
                    <Text
                        style={[
                            styles.validationText,
                            isPasswordValid ? styles.valid : styles.invalid,
                        ]}
                    >
                        ✓ At least 6 characters
                    </Text>
                    <Text
                        style={[
                            styles.validationText,
                            isPasswordContainsNumber ? styles.valid : styles.invalid,
                        ]}
                    >
                        ✓ Contains a number
                    </Text>
                </View>

                {/* Bouton Sign Up */}
                <Button  title="Continue" 
                onPress={() => navigation.navigate('Verify')} 
                style={styles.button}  />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#008080',
        marginBottom: 5,
    },
    subHeading: {
        fontSize: 14,
        color: '#555',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 65,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 30,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    inputContainerActive: {
        borderColor: '#E29578', // Bordure rose lorsqu'actif
        borderWidth: 2, // Accentue la bordure
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 15,
    },
    eyeIcon: {
        position: 'absolute', // Position absolue pour l'icône de l'œil
        right: 15, // Espacement de la droite
    },
    requirementsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 10,
        textAlign: 'center',
    },
    passwordValidation: {
        alignItems: 'center', // Centre les textes
        marginBottom: 20,
    },
    validationText: {
        fontSize: 14,
        marginBottom: 5,
        color: '#999',
    },
    valid: {
        color: '#83C5BE',
    },
    invalid: {
        color: '#999',
    },
});

export default SignUpScreen;
