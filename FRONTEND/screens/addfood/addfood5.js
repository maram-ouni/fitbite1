import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button"; 

const Addfood5 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="checkmark-circle" size={100} color="#83C5BE" />
      </View>
      <Text style={styles.title}>Upload Success</Text>
      <Text style={styles.message}>
        Your recipe has been uploaded, you can see it on your profile.
      </Text>
      <Button
              title="Back to home"
              onPress={() => navigation.navigate("Main")}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  iconContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#6c757d",
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#38C976",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Addfood5;
