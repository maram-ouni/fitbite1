import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Alert, Image, ScrollView,Picker } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; 
import { COLORS } from '../../styles/colors';
import Header from './Header';
import { getShoppingList, addIngredientToShoppingList } from '../../services/apiService'; // Import de la fonction de suppression
import { useUser } from '../../services/Usercontext'; // Import du contexte utilisateur
import Button from '../../components/Button';
import { resetShoppingList } from '../../services/apiService';
import { deleteIngredientFromShoppingList } from '../../services/apiService';
import { getAllSupermarches } from '../../services/apiService';



const GroceriesListScreen = ({ navigation }) => {
  const [shoppingList, setShoppingList] = useState([]); // État pour stocker la liste des courses
  const [ingredientName, setIngredientName] = useState(''); // Nom de l'ingrédient
  const [quantity, setQuantity] = useState(''); // Quantité de l'ingrédient
  const [unit, setUnit] = useState(''); // Unité (kg, l, g, etc.)
  const [supermarcheNom, setSupermarcheNom] = useState('');  // Nom du supermarché
const [supermarcheImage, setSupermarcheImage] = useState('');  // URL de l'image du supermarché
const [supermarches, setSupermarches] = useState([]);
const [loading, setLoading] = useState(true);


  const { userId } = useUser(); // Récupération de l'ID utilisateur via le contexte
  


  useEffect(() => {
    const fetchSupermarches = async () => {
      try {
        const supermarchesData = await getAllSupermarches(); // Cette fonction doit récupérer la liste des supermarchés depuis votre backend
        setSupermarches(supermarchesData); // Met à jour la liste des supermarchés
      } catch (error) {
        console.error('Erreur lors de la récupération des supermarchés:', error);
        Alert.alert('Erreur', 'Impossible de récupérer les supermarchés.');
      } finally {
        setLoading(false); // Arrêter l'état de chargement
      }
    };    fetchSupermarches();
  }, []);

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

 

  // Fonction pour ajouter un ingrédient à la liste
  const handleAddIngredient = async () => {
    if (!ingredientName || !quantity || !unit || !supermarcheNom || !supermarcheImage) {
      Alert.alert('Erreur', 'Tous les champs sont requis.');
      return;
    }
  
    const newIngredient = {
      ingredientName,
      quantity,
      unit,
      supermarcheNom,  // Ajout du nom du supermarché
      supermarcheImage,  // Ajout de l'image du supermarché
    };
  
    try {
      const addedIngredient = await addIngredientToShoppingList(userId, newIngredient);
      setShoppingList((prevList) => [...prevList, addedIngredient]); // Met à jour la liste locale
      setIngredientName(''); // Réinitialise le champ de saisie du nom
      setQuantity(''); // Réinitialise le champ de saisie de la quantité
      setUnit(''); // Réinitialise le champ de saisie de l'unité
      setSupermarcheNom(''); // Réinitialise le champ du nom du supermarché
      setSupermarcheImage(''); // Réinitialise le champ de l'image du supermarché
    } catch (error) {
      console.error('Erreur lors de l’ajout de l’ingrédient:', error);
    }
  };
  console.log(ingredientName);
  console.log(quantity);
  console.log(unit);

  console.log(supermarcheNom);

  console.log(supermarcheImage);
 

  // Fonction de rendu de chaque supermarché
  

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
      {/* Affichage du nom de l'ingrédient */}
      <Text style={styles.ingredientName}>{item.ingredientName}</Text>
      <Text style={styles.ingredientAmount}>
        {item.quantity} {item.unit}
      </Text>
  
      {/* Affichage de l'image et du nom du supermarché */}
      {item.supermarcheNom && item.supermarcheImage && (
        <View style={styles.supermarketInfo}>
          <Image 
            source={{ uri: item.supermarcheImage }} 
            style={styles.supermarketImage} 
          />
          <Text style={styles.supermarketName}>{item.supermarcheNom}</Text>
        </View>
      )}
  
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

        
        
<View style={styles.inputContainer}>
<Text style={styles.title}>Add other ingredient to your list ?</Text>
  <View style={styles.inputRow}>
    {/* Champ pour le nom de l'ingrédient */}
    <TextInput
      placeholder="Ingredient name"
      style={styles.input}
      value={ingredientName}
      onChangeText={setIngredientName}
    />

    {/* Champ pour la quantité */}
    <TextInput
      placeholder="Quantity"
      style={styles.input}
      value={quantity}
      onChangeText={setQuantity}
      keyboardType="numeric"
    />

    {/* Champ pour l'unité */}
    <TextInput
      placeholder="Unit (g, kg, l, etc.)"
      style={styles.input}
      value={unit}
      onChangeText={setUnit}
    />
  

  {/* Ajout du champ pour le nom du supermarché */}
  <TextInput
      placeholder="Super market name"
      style={styles.input}
      value={supermarcheNom}
      onChangeText={setSupermarcheNom}
    />
    

    {/* Champ pour l'image du supermarché */}
    <TextInput
      placeholder="Image"
      style={styles.input}
      value={supermarcheImage}
      onChangeText={setSupermarcheImage}  // Assurez-vous d'ajouter une fonction pour gérer ce champ
    />
  </View>

  <Button 
    title="Add ingredient" 
    onPress={handleAddIngredient} 
    style={styles.button}  
  />
</View>

      </ScrollView>

      {/* Champs de saisie pour ajouter un ingrédient */}
      <Button 
  title="Reset groceries list" 
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
  supermarketInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  supermarketImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  supermarketName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.text.dark,
  },
});

export default GroceriesListScreen;
