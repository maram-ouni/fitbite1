import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

// Replace this with your actual logo path
import logo from '../../assets/images/book.png'; // Assuming logo is in the assets folder

const OnboardingScreen4 = ({ navigation }) => {
  const handleSkip = () => {
    // Add your navigation logic here to move to the main app
    navigation.navigate('Auth');
  };

  const handleDiscover = () => {
    // Add your navigation logic here to move to the main app
    navigation.navigate('OnboardingScreen5');
  };

  return (
    <View style={styles.container}> {/* Use View instead of ScrollView to control footer positioning */}
    <ScrollView contentContainerStyle={[styles.content, { paddingTop: 50 }]}> {/* Ajout de paddingTop pour espacer les éléments vers le bas */}
    <Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Add Your Own Recipes</Text>
    <Image source={logo} style={[styles.logo, { marginTop: 8 }]} /> {/* Optionnel : ajoute un léger espacement au logo */}

  {/* Yellow container for the description */}
  <View style={[styles.descriptionContainer, { marginTop: 20 }]}> {/* Ajout de marginTop pour pousser vers le bas */}
    <Text style={styles.appDescription}>
    Have a favorite family recipe or a craving-specific dish? Add it to your app!
      {"\n"}
      <Text style={{ paddingLeft: 10 }}>• Create custom recipes with nutritional breakdowns.</Text>
      {"\n"} 
      <Text style={{ paddingLeft: 10 }}>• Save your go-to meals for easy access.</Text>
      {"\n"}
      <Text style={{ paddingLeft: 10 }}>• Share your recipes with other moms in the community.</Text>
      {"\n"}
      Your pregnancy cravings, your way!
    </Text>
  </View>
</ScrollView>


      {/* Footer container will always stick to the bottom */}
      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSkip} style={styles.button}>
            <Text style={[styles.buttonText, { color: '#3aafa9' }]}>Skip</Text>
          </TouchableOpacity>

          {/* Pagination (Dots) */}
          <View style={styles.pagination}>
            <Text style={styles.paginationDot}>•</Text> {/* First dot matching welcome color */}
            <Text style={styles.paginationDot}>•</Text>
            <Text style={styles.paginationDot}>•</Text>
            <Text style={[styles.paginationDot, { color: '#006D77' }]} >•</Text>
            <Text style={styles.paginationDot}>•</Text>
          </View>

          <TouchableOpacity onPress={handleDiscover} style={styles.button}>
            <Text style={[styles.buttonText, { color: '#3aafa9' }]}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This ensures the entire screen is used, allowing footer to stay at the bottom
    backgroundColor: '#e8f6f6',
  },
  content: {
    flexGrow: 1, // Allow scroll content to take as much space as it needs
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#006D77', // Color for the first pagination dot
    marginBottom: 20,
  },
  descriptionContainer: {
    backgroundColor: '#F9F7EB',
    padding: 20,
    borderRadius: 30,
    borderColor: '#E29579',
    borderWidth: 1,
    marginBottom: 0,
    width: '90%',
  },
  appDescription: {
    fontSize: 16,
    textAlign: 'left',
    color: '#444',
  },
  footerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 15,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 'auto', 
    marginBottom: '5%'// Ensures footer is pushed to the bottom of the screen
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center', // Center vertically the buttons and dots
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center', // This ensures that dots are vertically aligned with buttons
  },
  paginationDot: {
    fontSize: 25,
    color: '#a8d8d8',
    marginHorizontal: 3,
  },
});

export default OnboardingScreen4;
