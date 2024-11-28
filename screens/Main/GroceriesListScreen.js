import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';
import { COLORS } from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';

const GroceriesListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header
                date="2 May, Monday"
                onMorePress={() => console.log('More button pressed')}
                navigation={navigation} // Pass navigation prop
            />
            <Text style={styles.text}>Your Grocery List</Text>
            <Text>- Bread</Text>
            <Text>- Cheese</Text>
            <Text>- Tomatoes</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default GroceriesListScreen;
