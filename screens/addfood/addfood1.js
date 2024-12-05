import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/Ionicons";

const addfood1 = ({ navigation }) => {
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(30); // Par défaut 30 minutes

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Annuler</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>1/3</Text>
      </View>

      {/* Section Image */}
      <TouchableOpacity style={styles.imageUpload}>
        <Icon name="image-outline" size={50} color="#B6B6B6" />
        <Text style={styles.uploadText}>Ajouter une photo</Text>
        <Text style={styles.uploadSubtext}>(jusqu'à 12 Mo)</Text>
      </TouchableOpacity>

      {/* Food Name */}
      <Text style={styles.label}>Nom du plat</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez le nom du plat"
        value={foodName}
        onChangeText={(text) => setFoodName(text)}
      />

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Parlez un peu de votre plat"
        multiline
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      {/* Cooking Duration */}
      <Text style={styles.label}>Durée de cuisson (en minutes)</Text>
      <Slider
        value={duration}
        onValueChange={(value) => setDuration(value)}
        minimumValue={10}
        maximumValue={60}
        step={1}
        minimumTrackTintColor="#6EC1E4"
        maximumTrackTintColor="#E3E3E3"
        thumbTintColor="#6EC1E4"
      />
      <View style={styles.sliderLabels}>
        <Text style={styles.sliderText}>10</Text>
        <Text style={styles.sliderValue}>{duration}</Text>
        <Text style={styles.sliderText}>60</Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("addfood2")} // Navigation à la page suivante
      >
        <Text style={styles.nextButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FCFF",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cancelText: {
    color: "#FF6B6B",
    fontSize: 16,
  },
  stepText: {
    color: "#AAAAAA",
    fontSize: 16,
  },
  imageUpload: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B6B6B6",
    backgroundColor: "#FFFFFF",
  },
  uploadText: {
    fontSize: 16,
    color: "#4A4A4A",
    marginTop: 10,
  },
  uploadSubtext: {
    fontSize: 12,
    color: "#AAAAAA",
  },
  label: {
    fontSize: 14,
    color: "#4A4A4A",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B6B6B6",
    padding: 10,
    fontSize: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sliderText: {
    fontSize: 14,
    color: "#AAAAAA",
  },
  sliderValue: {
    fontSize: 16,
    color: "#4A4A4A",
    fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: "#6EC1E4",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 20,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default addfood1;
