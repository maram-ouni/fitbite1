import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,FlatList, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';
import { COLORS } from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';
import { Ionicons, Feather } from '@expo/vector-icons';

const GroceriesListScreen = ({ navigation }) => {

  const [groceries, setGroceries] = useState([
    { id: '1', name: 'Bread', quantity: '2' },
    { id: '2', name: 'Tomato', quantity: '1 Kg' },
    { id: '3', name: 'Cheese', quantity: '200g' },
    { id: '4', name: 'Pepper', quantity: '5' },
  ]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = () => {
    console.log({ title, description });
    alert('Recipe added successfully!');
    setTitle('');
    setDescription('');
};
const handleUpdateGrocery = (id, field, value) => {
    setGroceries((prevGroceries) =>
      prevGroceries.map((grocery) =>
        grocery.id === id ? { ...grocery, [field]: value } : grocery
      )
    );
  };
  const handleAddGrocery = () => {
    const newItem = {
      id: (groceries.length + 1).toString(), // ID unique basé sur la longueur de la liste
      name: 'New Item',
      quantity: '1',
    };
    setGroceries((prevGroceries) => [...prevGroceries, newItem]);
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
                <Header
                    date="2 May, Monday"
                    onMorePress={() => console.log('More button pressed')}
                    navigation={navigation} // Pass navigation prop
                />
        </View>


      {/* Title */}
      <Text style={styles.title}>Your Groceries List</Text>

      {/* Grocery List */}


      <FlatList
  data={groceries}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.groceryItem}>
      <Feather name="grid" size={20} color={COLORS.text.secondary} style={styles.dragIcon} />
      <TextInput
        style={styles.groceryInput}
        value={item.name}
        onChangeText={(text) => handleUpdateGrocery(item.id, 'name', text)} // Met à jour le nom
      />
      <TextInput
        style={styles.quantityInput}
        value={item.quantity}
        onChangeText={(text) => handleUpdateGrocery(item.id, 'quantity', text)} // Met à jour la quantité
      />
    </View>
  )}
/>

      {/* Save Button */}
    <View style={styles.buttonContainer}>
  {/* Submit Button */}
  <Button title="Submit" onPress={handleSubmit} style={styles.submitButton} />

  {/* Add Button */}
  <TouchableOpacity style={styles.addButton} onPress={handleAddGrocery}>
  <Feather name="plus" size={24} color="#fff" />
</TouchableOpacity>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary.light,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    color: COLORS.text.primary,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: 20,
  },
  groceryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.ui.cardBackground,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  dragIcon: {
    marginRight: 10,
  },
  groceryInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text.dark,
  },
  quantityInput: {
    fontSize: 16,
    color: COLORS.text.secondary,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: COLORS.primary.dark,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'column', // Place les boutons côte à côte
    justifyContent: 'space-between', // Espace entre les boutons
    alignItems: 'center',
    marginTop: 20,
  },

});




export default GroceriesListScreen;
