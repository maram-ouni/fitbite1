import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';
import { Ionicons } from '@expo/vector-icons';

const FavoriteRecipesScreen = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState('Breakfast'); // Gérer l'état actif des filtres
  const [searchText, setSearchText] = useState('');

  // Recettes classées par catégorie
  const recipesByCategory = {
    Breakfast: [
      {
        id: 1,
        title: 'cake',
        duration: '15 min.',
        image: require('../../assets/images/cake.png'),
      },
      {
        id: 2,
        title: 'breakfast',
        duration: '10 min.',
        image: require('../../assets/images/breakfast.png'),
      },
    ],
    Lunch: [
      {
        id: 3,
        title: 'Grilled Chicken Salad',
        duration: '20 min.',
        image: require('../../assets/images/salad.png'),
      },
      {
        id: 4,
        title: 'pumpkin-soup',
        duration: '25 min.',
        image: require('../../assets/images/pumkin-soup.jpg'),
      },
    ],
    Dinner: [
      {
        id: 5,
        title: 'Steak and Vegetables',
        duration: '30 min.',
        image: require('../../assets/images/salad.png'),
      },
      {
        id: 6,
        title: 'Pumpkin Soup',
        duration: '15 min.',
        image: require('../../assets/images/pumkin-soup.jpg'),
      },
    ],
    Snacks: [
      {
        id: 7,
        title: 'cake',
        duration: '5 min.',
        image: require('../../assets/images/cake.png'),
      },
      
    ],
  };

  // Obtenez les recettes pour le filtre actif
  const filteredRecipes = recipesByCategory[activeFilter] || [];

  return (
    <LinearGradient
      colors={COLORS.gradients.background.colors}
      locations={COLORS.gradients.background.locations}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <Header
          date="2 May, Monday"
          onMorePress={() => console.log('More button pressed')}
          navigation={navigation}
        />
      </View>

      {/* Barre de recherche */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder={`Search ${activeFilter.toLowerCase()} recipes...`}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Filtres */}
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollBox}
        >
          {Object.keys(recipesByCategory).map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setActiveFilter(filter)}
              style={styles.filterButton}
            >
              {activeFilter === filter ? (
                <LinearGradient
                  colors={[COLORS.primary.dark, COLORS.primary.main]}
                  style={styles.activeGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={[styles.filterText, styles.activeText]}>{filter}</Text>
                </LinearGradient>
              ) : (
                <View style={styles.inactiveButton}>
                  <Text style={styles.filterText}>{filter}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Liste des recettes */}
      <ScrollView style={styles.scrollView}>
        {filteredRecipes.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            style={styles.recipeCard}
            onPress={() => navigation.navigate('RecipeDetails', { recipeId: recipe.id })}
          >
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
  headerContainer: {
    marginTop: 15,
  },
  scrollView: {
    flex: 1,
  },
  filterContainer: {
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
    marginHorizontal: 10,
  },
  scrollBox: {
    flexDirection: 'row',
  },
  filterButton: {
    marginRight: 10,
    borderRadius: 25,
  },
  activeGradient: {
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveButton: {
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    color: '#666',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  recipeCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    marginHorizontal: 20,
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 40,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: '#555',
    fontSize: 15,
  },
});

export default FavoriteRecipesScreen;
