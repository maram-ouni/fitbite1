import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const Addfood3 = ({ navigation }) => {
  const [ingredients, setIngredients] = useState(["", ""]);

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const updateIngredient = (text, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = text;
    setIngredients(newIngredients);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ingredients</Text>
        <Text style={styles.pageIndicator}>2/3</Text>
      </View>

      <View style={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter ingredient"
              value={ingredient}
              onChangeText={(text) => updateIngredient(text, index)}
              placeholderTextColor="#999"
            />
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={addIngredient}>
          <Text style={styles.addButtonText}>+ Ingredient</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("addfood2")}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("addfood4")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 10, // Adding a small margin at the top
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  pageIndicator: {
    fontSize: 16,
    color: "#666",
  },
  ingredientsList: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderRadius: 25,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  addButton: {
    alignItems: "center",
    paddingVertical: 12,
  },
  addButtonText: {
    color: "#2D958E",
    fontSize: 16,
    fontWeight: "500",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  backButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    width: "45%",
    alignItems: "center",
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    backgroundColor: "#2D958E",
    width: "45%",
    alignItems: "center",
  },
  backButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Addfood3;
