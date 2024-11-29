import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const AddFood2 = ({ navigation }) => {
  const [ingredients, setIngredients] = useState(["", ""]); // Initialiser avec deux champs vides

  // Fonction pour ajouter un nouvel ingrédient
  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  // Fonction pour mettre à jour l'ingrédient à l'index donné
  const updateIngredient = (text, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = text;
    setIngredients(newIngredients);
  };

  // Fonction pour passer à l'écran suivant
  const handleNext = () => {
    // Logique pour traiter les ingrédients avant de naviguer
    console.log("Ingrédients:", ingredients);
    navigation.navigate("AddFood3"); // Remplacez par le nom de la page suivante
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ingredients</Text>

      {ingredients.map((ingredient, index) => (
        <View key={index} style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={ingredient}
            placeholder="Enter Ingredient"
            onChangeText={(text) => updateIngredient(text, index)}
          />
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={addIngredient}>
        <Text style={styles.addButtonText}>+ Ingredient</Text>
      </TouchableOpacity>

      {/* Buttons Back and Next next to each other */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddFood1")} // Navigation vers la première page
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddFood3")} // Navigation vers la première page
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#008CBA",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default AddFood2;
