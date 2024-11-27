import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Header from './Header';

const AddRecipeScreen = (navigation) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        console.log({ title, description });
        alert('Recipe added successfully!');
        setTitle('');
        setDescription('');
    };

    return (
        <View style={styles.container}>
            <Header
                date="2 May, Monday"
                onMorePress={() => console.log('More button pressed')}
                navigation={navigation} // Pass navigation prop
            />
            <Text style={styles.heading}>Add a New Recipe</Text>
            <TextInput
                placeholder="Recipe Title"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />
            <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                style={[styles.input, styles.textarea]}
                multiline
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 10,
    },
    textarea: {
        height: 100,
    },
});

export default AddRecipeScreen;
