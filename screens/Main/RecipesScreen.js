import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Card from '../../components/Card';

const RecipesScreen = () => {
    const recipes = [
        { id: '1', title: 'Pumpkin Soup', description: 'A warm and cozy recipe.' },
        { id: '2', title: 'Avocado Toast', description: 'Simple and delicious.' },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Card title={item.title} description={item.description} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
});

export default RecipesScreen;
