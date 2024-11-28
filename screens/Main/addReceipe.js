import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const mealItems = [
  { id: "1", name: "Coffee with milk", calories: 219 },
  { id: "2", name: "Sandwich", calories: 300 },
  { id: "3", name: "Tomato", calories: 50 },
  { id: "4", name: "Cucumber", calories: 50 },
  { id: "5", name: "Tea without sugar", calories: 0 },
  { id: "6", name: "Boiled egg", calories: 96 },
  { id: "7", name: "Avocado", calories: 250 },
  { id: "8", name: "Cheese", calories: 300 },
];

const MealTrackerScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItemSelection = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

  const filteredItems = mealItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>2 May, Monday</Text>
      <Text style={styles.mealText}>Breakfast</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Looking for something?"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.caloriesText}>{item.calories} Kcal</Text>
            <TouchableOpacity
              onPress={() => toggleItemSelection(item)}
              style={styles.addButton}
            >
              <Icon
                name={
                  selectedItems.includes(item) ? "check-circle" : "plus-circle"
                }
                size={24}
                color={selectedItems.includes(item) ? "green" : "black"}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButtonContainer}>
        <Text style={styles.addButtonText}>
          Add to breakfast ({selectedItems.length})
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  mealText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: "#e9ecef",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  caloriesText: {
    fontSize: 14,
    color: "#888",
  },
  addButton: {
    padding: 8,
  },
  addButtonContainer: {
    backgroundColor: "#0d6efd",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default MealTrackerScreen;
