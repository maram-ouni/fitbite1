import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { COLORS } from '../../styles/colors';
import Header from './Header';
import Button from '../../components/Button'; // Import du composant Button
import { Ionicons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const PlanningMealsScreen = ({ navigation }) => {
  const meals = [
    { type: 'BREAKFAST', icon: require('../../assets/images/breakfast.png') },
    { type: 'LUNCH', icon: require('../../assets/images/lunch.png') },
    { type: 'DINNER', icon: require('../../assets/images/dinner.png') },
    { type: 'SNACKS', icon: require('../../assets/images/snacks.png') },
  ];
  const handlePress = () => {
    navigation.navigate('RecipiesScreen');  // Modifier avec le nom de l'écran de destination
  };

  return (
 
    <LinearGradient
    colors={COLORS.gradients.background.colors}
    locations={COLORS.gradients.background.locations}
    style={styles.container}
  >
    {/* Header */}
    <View style={styles.header}>
      <Header
        date="2 May, Monday"
        onMorePress={() => console.log('More button pressed')}
        navigation={navigation}
      />
    </View>
      {/* Meal Cards */}

      
      <ScrollView style={styles.mealContainer}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.mealCard}>
            <Image source={meal.icon} style={styles.mealIcon} />
            <Text style={styles.mealText}>{meal.type}</Text>
            <TouchableOpacity style={styles.addButton} onPress={handlePress}>
                <Feather name="plus" size={24} color="#006A6A" />
            </TouchableOpacity>
          </View>
        ))}
         <Button  title="Create shopping list" 
                onPress={() => navigation.navigate('GroceriesList')} 
                style={styles.button}  />
      </ScrollView>


      {/* Bottom Navigation */}
     
  
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  header: {
    marginTop:15,
    
  },
  week: {
    alignItems: 'center', // Center the header text horizontally
    marginVertical: 10,
  },
  weekText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary.dark,
  },
 
  mealContainer: {
   
    padding: 20,
  },
  mealCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary.light,
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.secondary.dark,
    justifyContent: 'space-between',  // Ensures the text is centered and space is properly distributed
    borderBottomWidth: 1,             // Adds a bottom border for the horizontal line
    borderBottomColor: COLORS.secondary.dark,  // Color of the line
  },
  mealIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  mealText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.primary.dark,
    fontWeight: 'bold',
    textAlign: 'center',  // Centers the text horizontally
  },
  addButton: {
    backgroundColor: COLORS.ui.addButton,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: COLORS.primary.dark,
    fontWeight: 'bold',
  },
  headerContainer: {
    padding: 20, // Identique à celui dans FavoriteScreen
   
},

});

export default PlanningMealsScreen;

