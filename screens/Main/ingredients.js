import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const RecipePage = () => {
  const [servings, setServings] = useState(5);
  const [calories, setCalories] = useState(189);

  const calculateCalories = () => {
    // Exemple de calcul des calories par portion
    setCalories(189 * servings); // Exemple simple, multiplier par les portions
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image en haut */}
      <Image
        source={{ uri: "https://via.placeholder.com/300" }} // Remplacer par ton URL d'image
        style={styles.image}
      />

      {/* Informations sur la recette */}
      <Text style={styles.recipeTitle}>Pumpkin Soup</Text>
      <Text style={styles.timeText}>6 - 15 min</Text>

      {/* Boutons de navigation */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingredients</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>How to Cook</Text>
        </TouchableOpacity>
      </View>

      {/* Champs d'entrée pour les portions et calcul des calories */}
      <Text style={styles.label}>Servings</Text>
      <TextInput
        style={styles.input}
        value={String(servings)}
        onChangeText={(text) => setServings(Number(text))}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Calories</Text>
      <Text style={styles.input}>{calories} cal</Text>

      <Text style={styles.label}>Ingredients</Text>
      <Text style={styles.input}>Pumpkin: 1</Text>
      <Text style={styles.input}>Onion: 1</Text>

      {/* Calculer les calories */}
      <TouchableOpacity
        style={styles.calculateButton}
        onPress={calculateCalories}
      >
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>

      {/* Footer de la page */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Favorite</Text>
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
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  timeText: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#008CBA",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 15,
  },
  calculateButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  calculateButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  footerButton: {
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  footerButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default RecipePage;
