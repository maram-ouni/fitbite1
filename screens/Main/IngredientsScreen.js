import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../styles/colors'; // Assurez-vous que vos couleurs sont bien définies ici
import { Ionicons, Feather } from '@expo/vector-icons';
import Header from './Header';
import Button from '../../components/Button';
import { LinearGradient } from 'expo-linear-gradient';

const IngredientsScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const foods = [
    { id: '1', name: 'Coffee with milk', calories: 219 },
    { id: '2', name: 'Sandwich', calories: 300 },
    { id: '3', name: 'Tomato', calories: 50 },
    { id: '4', name: 'Cucumber', calories: 50 },
    { id: '5', name: 'Tea without sugar', calories: 0 },
    { id: '6', name: 'Boiled egg', calories: 96 },
    { id: '7', name: 'Avocado', calories: 250 },
    { id: '8', name: 'Cheese', calories: 300 },
  ];

  const toggleItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const renderFoodItem = (item) => (
    <View style={styles.foodCard} key={item.id}>
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodCalories}>{item.calories} kcal</Text>
      <TouchableOpacity
        style={[
          styles.addButton,
          selectedItems.includes(item.id) && { backgroundColor: COLORS.primary.dark },
        ]}
        onPress={() => toggleItem(item.id)}
      >
        <Feather
          name={selectedItems.includes(item.id) ? 'check' : 'plus'}
          size={20}
          color={COLORS.primary.light}
        />
      </TouchableOpacity>
    </View>
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    console.log({ title, description });
    alert('Items added successfully!');
    setTitle('');
    setDescription('');
  };

  // Fonction pour revenir à l'écran précédent
  const handleGoBack = () => {
    navigation.goBack();
  };

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

      {/* Back Button */}
      <View style={styles.bbb}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color={COLORS.primary.dark} />
        </TouchableOpacity>
      </View>

      

      {/* Title */}
      <Text style={styles.title}>Breakfast</Text>
      <Text style={styles.totalCalories}>0 Kcal</Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Looking for something?"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.hhh}></View>

      {/* Food List - using ScrollView instead of FlatList */}
      <ScrollView style={styles.foodList}>
        {foods.map((item) => renderFoodItem(item))}
      </ScrollView>

      {/* Add to Breakfast Button */}
      <View style={styles.buttonContainer}>
        <Button title="Add items" onPress={handleSubmit} style={styles.submitButton} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Ajouté pour réduire la largeur des éléments généraux
  },
  headerContainer: {
    marginTop: 15,
    width: '100%',  // Largeur de l'entête reste pleine
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: COLORS.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bbb: {
  
    paddingTop: 5,
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary.dark,
    marginBottom: 10,
    paddingTop:-20,
    textAlign: 'center',
    width: '80%',  // Réduit la largeur du titre
    alignSelf: 'center',  // Centre le titre
  },
  totalCalories: {
    fontSize: 16,
    color: '#9da8c3',
    marginBottom: 10,
    textAlign: 'center',
    width: '80%',  // Réduit la largeur des calories
    alignSelf: 'center',  // Centre les calories
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15,
    width: '95%',  // Réduit la largeur de la barre de recherche
    alignSelf: 'center',  // Centre la barre de recherche
    
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: '#555',
    fontSize:15,
  },
  foodList: {
    flex: 1,
    width: '100%',  // Assurez-vous que la liste des aliments occupe toute la largeur disponible
  },
  foodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.secondary.light,
    width: '95%',  // Réduit la largeur des cartes alimentaires
    alignSelf: 'center',  // Centre les cartes
  },
  foodName: {
    fontSize: 16,
    color: '#1a1c24',
    fontWeight: 'bold',
  },
  foodCalories: {
    fontSize: 14,
    color: '#9da8c3',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.ui.addButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',  // Réduit la largeur du conteneur du bouton
    alignSelf: 'center',  // Centre le bouton
  },
  submitButton: {
    marginTop: 20,
    width: '100%',  // Largeur complète pour le bouton submit
  },
});

export default IngredientsScreen;
