import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

const addfood4 = ({ navigation }) => {
  const [steps, setSteps] = useState(["", "", ""]);

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const updateStep = (text, index) => {
    const newSteps = [...steps];
    newSteps[index] = text;
    setSteps(newSteps);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Steps</Text>
        <Text style={styles.pageIndicator}>3/3</Text>
      </View>

      <ScrollView style={styles.stepsList}>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Tell a little about your food"
              value={step}
              onChangeText={(text) => updateStep(text, index)}
              multiline={true}
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
          style={styles.saveButton}
          onPress={() => {
            // Add your save logic here
            navigation.navigate("addfood5"); // or wherever you want to go after saving
          }}
        >
          <Text style={styles.saveButtonText}>Save</Text>
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
    backgroundColor: "#FF9B90",
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

export default addfood4;
