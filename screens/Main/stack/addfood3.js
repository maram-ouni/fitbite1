import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const FoodStepsScreen = ({ navigation }) => {
  const [steps, setSteps] = useState(["", "", ""]); // Initialiser avec 3 champs vides

  const handleAddStep = () => {
    setSteps([...steps, ""]);
  };

  const handleSave = () => {
    // Handle save action (e.g., save data to a server or state)
    console.log("Steps saved:", steps);
  };

  const handleBack = () => {
    navigation.navigate("AddFood2"); // Navigate back to previous screen
    console.log("Back button clicked");
  };

  const handleChangeText = (text, index) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = text;
    setSteps(updatedSteps);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F9F9", padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Cancel | 1/3</Text>
      <ScrollView style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
          Steps
        </Text>
        {steps.map((step, index) => (
          <View key={index} style={{ marginBottom: 15 }}>
            <TextInput
              placeholder="Tell a little about your food"
              value={step}
              onChangeText={(text) => handleChangeText(text, index)}
              style={{
                backgroundColor: "#fff",
                padding: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#E1E1E1",
                width: "100%", // Assure que le champ occupe toute la largeur disponible
                minHeight: 60, // Augmente la hauteur des champs
                fontSize: 16, // Ajuste la taille du texte à l'intérieur des bulles
              }}
            />
          </View>
        ))}
        <TouchableOpacity
          onPress={handleAddStep}
          style={{
            backgroundColor: "#5CB85C",
            paddingVertical: 10,
            borderRadius: 5,
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>+ Step</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Buttons Back and Save side by side */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleBack} style={styles.buttonBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={styles.buttonSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonBack: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonSave: {
    backgroundColor: "#28A745",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default FoodStepsScreen;
