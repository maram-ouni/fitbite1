


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import {  updateRecipeWithInstructions } from "../../services/apiService"; // Importez votre service API

const Addfood4 = ({ navigation, route }) => {
  const [steps, setSteps] = useState(["", "", ""]);
  const [loading, setLoading] = useState(false);

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const updateStep = (text, index) => {
    const newSteps = [...steps];
    newSteps[index] = text;
    setSteps(newSteps);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Récupérer l'ID de la recette depuis les paramètres de navigation
      const recipeId = route.params.recipeId; // ID de la recette passée via navigation
      console.log("Recipe ID:", recipeId);

      // Préparer les données pour la mise à jour
      const instructions = steps.filter((step) => step.trim()); // Filtrer les étapes non vides
      if (instructions.length === 0) {
        Alert.alert("Erreur", "Veuillez ajouter au moins une étape.");
        return;
      }
      console.log("Instructions:", instructions);
      // Mettre à jour la recette avec les instructions
      await updateRecipeWithInstructions(recipeId, { instructions: instructions });


      // Naviguer vers la page suivante ou revenir à la liste des recettes
      navigation.navigate("addfood5", { recipeId });
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la recette :", error);
      Alert.alert("Erreur", error.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Recipe Steps</Text>
      </View>

      <ScrollView style={styles.stepsList}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Step description"
              value={step}
              onChangeText={(text) => updateStep(text, index)}
              multiline
              placeholderTextColor="#999"
            />
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={addStep}>
          <Text style={styles.addButtonText}>+ Step</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("addfood3")}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.saveButton, loading && { opacity: 0.7 }]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.saveButtonText}>{loading ? "Saving..." : "Save"}</Text>
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
    marginTop: 20, 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10, 

  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color:"#006D77",
  },
  pageIndicator: {
    fontSize: 16,
    color: "#666",
  },
  stepsList: {
    flex: 1,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E29578",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },
  stepNumberText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    minHeight: 100,
    textAlignVertical: "top",
  },
  addButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  addButtonText: {
    color: "#2D958E",
    fontSize: 18,
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
  saveButton: {
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
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Addfood4;
