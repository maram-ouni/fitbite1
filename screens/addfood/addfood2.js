import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Slider from "@react-native-community/slider";

const addfood2 = ({ navigation }) => {
  const [formData, setFormData] = useState({
    foodName: "",
    description: "",
    cookingDuration: 30,
    image: null,
  });

  // Demander la permission d'accès à la galerie
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission d'accéder à la galerie nécessaire !");
      }
    })();
  }, []);

  const pickImageFromGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        maxFileSize: 12 * 1024 * 1024, // 12 MB limit
      });

      if (!result.canceled) {
        setFormData((prev) => ({
          ...prev,
          image: result.assets[0].uri,
        }));
      }
    } catch (error) {
      console.log("Error picking image:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.pageNumber}>1/3</Text>
      </View>

      {/* Image Picker */}
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={pickImageFromGallery}
      >
        {formData.image ? (
          <Image
            source={{ uri: formData.image }}
            style={styles.selectedImage}
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.uploadText}>Add Cover Photo</Text>
            <Text style={styles.uploadLimit}>(up to 12 Mb)</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Food Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Food Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter food name"
          value={formData.foodName}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, foodName: text }))
          }
        />
      </View>

      {/* Description Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Tell a little about your food"
          multiline
          numberOfLines={4}
          value={formData.description}
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, description: text }))
          }
        />
      </View>

      {/* Duration Slider */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cooking Duration (in minutes)</Text>
        <View style={styles.sliderLabels}>
          <Text style={styles.sliderText}>&lt;10</Text>
          <Text style={styles.sliderText}>30</Text>
          <Text style={styles.sliderText}>&gt;60</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={60}
          value={formData.cookingDuration}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, cookingDuration: value }))
          }
          minimumTrackTintColor="#0D9488"
          maximumTrackTintColor="#E5E7EB"
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("addfood3")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cancelButton: {
    color: "#FF69B4",
    fontSize: 16,
  },
  pageNumber: {
    color: "#666",
    fontSize: 16,
  },
  imageContainer: {
    height: 200,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedImage: {
    width: "100%",
    height: "100%",
  },
  imagePlaceholder: {
    alignItems: "center",
  },
  uploadText: {
    color: "#666",
    fontSize: 16,
    marginBottom: 5,
  },
  uploadLimit: {
    color: "#999",
    fontSize: 12,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#0D9488",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sliderText: {
    color: "#666",
    fontSize: 14,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  nextButton: {
    backgroundColor: "#0D9488",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: "auto",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default addfood2;
