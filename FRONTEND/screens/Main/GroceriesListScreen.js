import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Alert, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; 
import { COLORS } from '../../styles/colors';
import Header from './Header';
import { getShoppingList, addIngredientToShoppingList } from '../../services/apiService'; // Import de la fonction de suppression
import { getSupermarkets } from '../../services/apiService'; // Import de la fonction pour récupérer les supermarchés
import { useUser } from '../../services/Usercontext'; // Import du contexte utilisateur
import Button from '../../components/Button';
import { resetShoppingList } from '../../services/apiService';
import { deleteIngredientFromShoppingList } from '../../services/apiService';

const GroceriesListScreen = ({ navigation }) => {
  const [shoppingList, setShoppingList] = useState([]); // État pour stocker la liste des courses
  const [ingredientName, setIngredientName] = useState(''); // Nom de l'ingrédient
  const [quantity, setQuantity] = useState(''); // Quantité de l'ingrédient
  const [unit, setUnit] = useState(''); // Unité (kg, l, g, etc.)
  const [supermarkets, setSupermarkets] = useState([]); // État pour stocker les supermarchés
  const { userId } = useUser(); // Récupération de l'ID utilisateur via le contexte
  
  // Fonction pour récupérer la liste des courses
  useEffect(() => {
    const fetchShoppingList = async () => {
      try {
        if (!userId) {
          console.error("User ID is missing");
          return;
        }
        
        const list = await getShoppingList(userId);
        setShoppingList(list); // Met à jour l'état avec la liste récupérée
      } catch (error) {
        console.error('Erreur lors de la récupération de la liste des courses:', error);
      }
    };

    fetchShoppingList();
  }, [userId]);

  // Fonction pour récupérer les supermarchés
  useEffect(() => {
    const fetchSupermarkets = async () => {
      try {
        const list = await getSupermarkets();
        setSupermarkets(list); // Met à jour l'état avec la liste des supermarchés
      } catch (error) {
        console.error('Erreur lors de la récupération des supermarchés:', error);
      }
    };

    fetchSupermarkets();
  }, []);

  // Fonction pour ajouter un ingrédient à la liste
  const handleAddIngredient = async () => {
    if (!ingredientName || !quantity || !unit) {
      Alert.alert('Erreur', 'Tous les champs sont requis.');
      return;
    }

    const newIngredient = {
      ingredientName,
      quantity,
      unit,
    };

    try {
      const addedIngredient = await addIngredientToShoppingList(userId, newIngredient);
      setShoppingList((prevList) => [...prevList, addedIngredient]); // Met à jour la liste locale
      setIngredientName(''); // Réinitialise le champ de saisie du nom
      setQuantity(''); // Réinitialise le champ de saisie de la quantité
      setUnit(''); // Réinitialise le champ de saisie de l'unité
    } catch (error) {
      console.error('Erreur lors de l’ajout de l’ingrédient:', error);
    }
  };

 

  // Fonction de rendu de chaque supermarché
  const renderSupermarketItem = ({ item }) => (
    <View style={styles.supermarketItem}>
      {item.image && <Image source={{ uri: item.image }} style={styles.supermarketImage} />}
      <Text style={styles.supermarketName}>{item.nom}</Text>
      <Text style={styles.supermarketAddress}>{item.adresse}, {item.ville}</Text>
    </View>
  );

  // Fonction pour revenir en arrière
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleResetShoppingList = async () => {
    try {
      console.log('ID utilisateur:', userId);
      
      // Appel à la fonction de réinitialisation de la liste sur le backend
      const response = await resetShoppingList(userId);
      console.log('Liste des courses réinitialisée:', response);
      
      // Vider la liste locale après une réinitialisation réussie
      setShoppingList([]); // Cela supprime visuellement la liste de l'écran
    } catch (error) {
      console.error('Erreur lors de la réinitialisation de la liste des courses:', error);
    }
  };
  

  const handleDeleteIngredient = async (itemId) => {
    try {
      // Appel de l'API pour supprimer l'ingrédient
      await deleteIngredientFromShoppingList(userId, itemId);  // Utilisez itemId ici
  
      // Mise à jour de la liste locale
      setShoppingList((prevList) => prevList.filter(ingredient => ingredient._id !== itemId));
  
      console.log('Ingrédient supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression de l’ingrédient:', error);
    }
  };
  
  const renderGroceryItem = ({ item }) => (
    <View style={styles.groceryItem}>
      <Text style={styles.ingredientName}>{item.ingredientName}</Text>
      <Text style={styles.ingredientAmount}>
        {item.quantity} {item.unit}
      </Text>
  
      {/* Bouton de suppression */}
      <TouchableOpacity 
        onPress={() => handleDeleteIngredient(item._id)} 
        style={styles.deleteButton}
      >
        <Feather name="trash-2" size={20} color={COLORS.danger} />
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient
      colors={COLORS.gradients.background.colors}
      locations={COLORS.gradients.background.locations}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Header
          date="2 May, Monday"
          onMorePress={() => console.log('More button pressed')}
          navigation={navigation}
        />
      </View>

      <View style={styles.bbb}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color={COLORS.primary.dark} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Your Groceries List</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Liste des courses */}
        <FlatList
          data={shoppingList}
          keyExtractor={(item) => item._id}
          renderItem={renderGroceryItem}
          contentContainerStyle={styles.listContainer}
        />

        {/* Liste des supermarchés */}
        <Text style={styles.subtitle}>Available Supermarkets</Text>
        <FlatList
          data={supermarkets}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderSupermarketItem}
          contentContainerStyle={styles.listContainer}
        />
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Nom de l'ingrédient"
            style={styles.input}
            value={ingredientName}
            onChangeText={setIngredientName}
          />
          <TextInput
            placeholder="Quantité"
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Unité (g, kg, l, etc.)"
            style={styles.input}
            value={unit}
            onChangeText={setUnit}
          />
        </View>
        <Button 
          title="Ajouter" 
          onPress={handleAddIngredient} 
          style={styles.button}  
        />
      </View>
      </ScrollView>

      {/* Champs de saisie pour ajouter un ingrédient */}
      <Button 
  title="Réinitialiser la liste des courses" 
  onPress={handleResetShoppingList} 
/>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { marginTop: 15 },
  title: { fontSize: 22, fontWeight: 'bold', color: COLORS.text.primary, textAlign: 'center', marginBottom: 20 },
  subtitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text.primary, marginTop: 30, marginBottom: 10, textAlign: 'center' },
  scrollViewContainer: { paddingHorizontal: 16, paddingBottom: 20 },
  listContainer: { paddingHorizontal: 16 },
  groceryItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: COLORS.ui.cardBackground, 
    borderRadius: 12, 
    padding: 15, 
    marginBottom: 10, 
    elevation: 2 
  },
  ingredientName: { fontSize: 16, fontWeight: 'bold', color: COLORS.text.dark },
  ingredientAmount: { fontSize: 16, color: COLORS.text.secondary },
  supermarketItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: COLORS.ui.cardBackground, 
    borderRadius: 12, 
    padding: 15, 
    marginBottom: 10, 
    elevation: 2, 
    justifyContent: 'space-between',
  },
  supermarketImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  supermarketName: { fontSize: 16, fontWeight: 'bold', color: COLORS.text.dark, flex: 1, textAlign: 'center' },
  supermarketAddress: { fontSize: 14, color: COLORS.text.secondary, flex: 1, textAlign: 'center' },
  backButton: { width: 40, height: 40, borderRadius: 25, backgroundColor: COLORS.primary.light, alignItems: 'center', justifyContent: 'center' },
  inputContainer: { paddingHorizontal: 16, paddingBottom: 10, marginTop: 10 }, 
  inputRow: { 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  input: { 
    borderWidth: 1, 
    borderColor: COLORS.ui.border, 
    borderRadius: 8, 
    padding: 10, 
    width: '100%', // Les champs occupent toute la largeur
    marginBottom: 10, // Espace entre chaque champ
    backgroundColor: COLORS.ui.cardBackground 
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
  },
  deleteButton: {
    backgroundColor: COLORS.ui.cardBackground,
    borderRadius: 50,
    padding: 5,
  },
});

export default GroceriesListScreen;
