import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const GroceryListScreen = (navigation) => {
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

export default GroceryListScreen;
