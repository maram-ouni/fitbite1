import Header from './Header';
import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';


const RecipesScreen = ({ navigation }) => {
    const recipes = [
        {
            id: 1,
            title: 'Cake',
            duration: '20 min.',
            image: require('../../assets/images/cake.png'),
        },
        {
            id: 2,
            title: 'Salad',
            duration: '10 min.',
            image: require('../../assets/images/salad.png'),
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
            {/* Utilisation du Header réutilisable */}
            <View style={styles.headerContainer}>
                    <Header
                        date="2 May, Monday"
                        
                    />
            </View>
            
            {/* Reste du code */}
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        marginLeft: 8,
        fontSize: 16,
        color: COLORS.text.dark,
    },
    filterContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
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
    headerContainer: {
        padding: 20, // Identique à celui dans FavoriteScreen
       
    },

});

export default RecipesScreen;
