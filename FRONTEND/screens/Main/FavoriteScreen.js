import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';
import { Ionicons } from '@expo/vector-icons';
import { getFavoriteRecipes } from '../../services/apiService'; // Import the API service
import { useUser } from '../../services/Usercontext';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect from React Navigation

const FavoriteRecipesScreen = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState('Breakfast'); // Active filter for categories
  const [searchText, setSearchText] = useState('');
  const { userId } = useUser(); // Get the current user's ID from context
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // List of categories to filter by
  const filters = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  // Fetch favorite recipes
  const fetchFavoriteRecipes = async () => {
    try {
      if (!userId) return;

      setLoading(true);
      const recipes = await getFavoriteRecipes(userId); // Fetch the favorite recipes from the API
      setFavoriteRecipes(recipes);
      console.log(recipes); // Log fetched recipes
    } catch (err) {
      setError('Failed to load favorite recipes.'); // Handle error
      console.error('Error fetching favorite recipes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavoriteRecipes(); // Fetch favorite recipes when the screen loads
  }, [userId]);

  // Use focus effect to refetch the favorite recipes when the screen comes back into focus
  useFocusEffect(
    React.useCallback(() => {
      fetchFavoriteRecipes(); // Re-fetch favorite recipes on screen focus
    }, [userId])
  );

  // Filter recipes based on search text and active filter
  const filteredRecipes = favoriteRecipes.filter(
    (recipe) =>
      recipe.nom.toLowerCase().includes(searchText.toLowerCase()) &&
      recipe.categorie === activeFilter
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

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

      {/* Category Filters */}
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollBox}
        >
          {filters.map((filter) => (
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

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder={`Search ${activeFilter.toLowerCase()} recipes...`}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* List of Favorite Recipes */}
      <ScrollView style={styles.scrollView}>
        {filteredRecipes.length === 0 ? (
          <Text style={styles.noFavoritesText}>You have no favorite recipes yet.</Text>
        ) : (
          filteredRecipes.map((recipe) => (
            <TouchableOpacity
              key={recipe._id}
              style={styles.recipeCard}
              onPress={() =>
                navigation.navigate('ParentComponent', { recipeId: recipe._id })
              } // Navigate to ParentComponent with the recipe ID
            >
              <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeTitle}>{recipe.nom}</Text>
                <Text style={styles.recipeDuration}>{recipe.tempsPreparation} min.</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
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
  noFavoritesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default FavoriteRecipesScreen;
