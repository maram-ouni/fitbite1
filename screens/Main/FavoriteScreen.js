import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';


const FavoriteScreen = (navigation) => {
    const recipes = [
        {
            id: 1,
            title: 'PUMPKIN SOUP',
            duration: '15 min.',
            image: require('../../assets/images/pumkin-soup.jpg'),
        },
        {
            id: 2,
            title: 'PUMPKIN SOUP',
            duration: '15 min.',
            image: require('../../assets/images/pumkin-soup.jpg'),
        },
        {
            id: 3,
            title: 'PUMPKIN SOUP',
            duration: '15 min.',
            image: require('../../assets/images/pumkin-soup.jpg'),
        },
    ];

    return (
        <LinearGradient
            colors={COLORS.gradients.background.colors}
            locations={COLORS.gradients.background.locations}
            style={styles.container}
        >
            <View style={styles.searchContainer}>
                
                <TextInput
                    style={styles.searchInput}
                    placeholder="Looking for something?"
                    placeholderTextColor="#666"
                />
            </View>

            <View style={styles.filterContainer}>
            <View style={styles.scrollBox}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
                            <Text style={[styles.filterText, styles.filterTextActive]}>Breakfast</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton}>
                            <Text style={styles.filterText}>Lunch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton}>
                            <Text style={styles.filterText}>Dinner</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton}>
                            <Text style={styles.filterText}>Snacks</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </View>

            <ScrollView style={styles.recipesContainer}>
                {recipes.map((recipe) => (
                    <TouchableOpacity key={recipe.id} style={styles.recipeCard}>
                        <Image source={recipe.image} style={styles.recipeImage} />
                        <View style={styles.recipeInfo}>
                            <Text style={styles.recipeTitle}>{recipe.title}</Text>
                            <Text style={styles.recipeDuration}>{recipe.duration}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        padding: 20,
    },
    searchInput: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
    },
    filterContainer: {
        paddingHorizontal: 10,

    },
    filterButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 20,
    },
    filterButtonActive: {
        backgroundColor: '#006D77',
    },
    filterText: {
        fontSize: 16,
        color: '#006D77',
    },
    filterTextActive: {
        color: 'white',
    },
    recipesContainer: {
        padding: 20,
    },
    recipeCard: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden',
    },
    recipeImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    recipeInfo: {
        padding: 15,
    },
    recipeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    recipeDuration: {
        color: '#666',
    },
    scrollBox: {
        backgroundColor: '#F2F5FC',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 10,
    },

});

export default FavoriteScreen;