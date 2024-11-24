import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';

const Button2 = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, style]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <LinearGradient
                colors={[COLORS.secondary.dark, COLORS.secondary.main]}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: Dimensions.get('window').width - 40,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        alignSelf: 'center',
        marginVertical: 10,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Button2;