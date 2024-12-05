import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ParentComponent = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("INGREDIENTS");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="ellipsis1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Recipe Image */}
        <Image
          source={require("../../assets/images/pumkin-soup.jpg")}
          style={styles.recipeImage}
        />

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "INGREDIENTS" && styles.activeTab,
            ]}
            onPress={() => {
              setActiveTab("INGREDIENTS");
              console.log("Tab changed to INGREDIENTS");
            }}
          >
            <Text style={styles.tabText}>INGREDIENTS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "HOW TO COOK" && styles.activeTab,
            ]}
            onPress={() => {
              setActiveTab("HOW TO COOK");
              console.log("Tab changed to HOW TO COOK");
            }}
          >
            <Text style={styles.tabText}>HOW TO COOK</Text>
          </TouchableOpacity>
        </View>

        {/* Recipe Title Section */}
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>PUMPKIN SOUP</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <AntDesign
                  name="hearto"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="shoppingcart" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.time}>15 min.</Text>
        </View>

        {/* Servings Section */}
        <View style={styles.servingsContainer}>
          <Image
            source={require("../../assets/images/pumkin-soup.jpg")}
            style={styles.servingIcon}
          />
          <Text style={styles.servingsText}>Servings</Text>
          <Text style={styles.servingsNumber}>5</Text>
        </View>

        {/* Calculate Button */}
        <TouchableOpacity style={styles.calculateButton}>
          <Text style={styles.calculateButtonText}>CALCULATE</Text>
        </TouchableOpacity>

        {/* Ingredients List */}
        {activeTab === "INGREDIENTS" && (
          <View style={styles.ingredientsList}>
            <View style={styles.ingredientItem}>
              <Text style={styles.ingredientName}>Calories</Text>
              <Text style={styles.ingredientAmount}>169 cal</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Text style={styles.ingredientName}>Pumpkin</Text>
              <Text style={styles.ingredientAmount}>1</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Text style={styles.ingredientName}>Onion</Text>
              <Text style={styles.ingredientAmount}>1</Text>
            </View>
          </View>
        )}

        {/* How to Cook Content */}
        {activeTab === "HOW TO COOK" && (
          <View style={styles.howToCookContent}>
            <Text style={styles.stepText}>
              1. Peel and cut the pumpkin into cubes
            </Text>
            <Text style={styles.stepText}>2. Dice the onion</Text>
            <Text style={styles.stepText}>3. Heat oil in a large pot</Text>
            <Text style={styles.stepText}>
              4. Sauté onion until translucent
            </Text>
            <Text style={styles.stepText}>
              5. Add pumpkin and cook until soft
            </Text>
            <Text style={styles.stepText}>
              6. Add broth and cook for another 10 minutes
            </Text>
            <Text style={styles.stepText}>7. Blend until smooth</Text>
            <Text style={styles.stepText}>8. Serve and enjoy!</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100, // Adjust the padding based on the header's size
    paddingBottom: 20, // Add padding to avoid cutting off the last content
  },
  header: {
    position: "absolute", // Make header fixed
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F5F5F5", // Light grey background for the header
    zIndex: 1, // Ensures header is above other content
    padding: 8, // Padding for the header
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16, // Adjusted to push the icons lower
  },
  recipeImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#2D958E",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  titleContainer: {
    padding: 16,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 16,
  },
  time: {
    color: "#2D958E",
    marginTop: 4,
  },
  servingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F5F5F5",
    marginHorizontal: 16,
    borderRadius: 8,
  },
  servingIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  servingsText: {
    flex: 1,
  },
  servingsNumber: {
    fontWeight: "bold",
  },
  calculateButton: {
    backgroundColor: "#2D958E",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  calculateButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  ingredientsList: {
    padding: 16,
  },
  ingredientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  howToCookContent: {
    padding: 16,
  },
  stepText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
});

export default ParentComponent;
