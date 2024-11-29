import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

// Replace this with your actual logo path
import logo from '../../assets/images/welcome2.png'; // Assuming logo is in the assets folder

const OnboardingScreen2 = ({ navigation }) => {
  const handleSkip = () => {
    navigation.navigate('Auth');
  };

  const handleDiscover = () => {
    navigation.navigate('OnboardingScreen3');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: 50 }]}>
        <Text style={styles.welcomeText}>Nutrition Made Simple</Text>
        <Image source={logo} style={[styles.logo, { marginTop: 8 }]} />

        {/* Yellow container for the description */}
        <View style={[styles.descriptionContainer, { marginTop: 20 }]}>
          <Text style={styles.appDescription}>
            Good nutrition is key for a healthy pregnancy! Our app offers:
            {"\n"}
            <Text style={{ paddingLeft: 10 }}>• Personalized Meal Plans: Tailored to your trimester and dietary preferences.</Text>
            {"\n"}
            <Text style={{ paddingLeft: 10 }}>• Shopping Lists: Automatically generated based on your meal plan.</Text>
            {"\n"}
            <Text style={{ paddingLeft: 10 }}>• Healthy Recipes: Easy-to-cook, nutritious recipes that benefit both you and your baby.</Text>
            {"\n"}
            Say goodbye to meal-planning stress and hello to wholesome eating!
          </Text>
        </View>
      </ScrollView>

      {/* Footer container */}
      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSkip} style={styles.button}>
            <Text style={[styles.buttonText, { color: '#3aafa9' }]}>Skip</Text>
          </TouchableOpacity>

          {/* Pagination (Dots) */}
          <View style={styles.pagination}>
            <Text style={styles.paginationDot}>•</Text>
            <Text style={[styles.paginationDot, { color: '#006D77' }]}>•</Text>
            <Text style={styles.paginationDot}>•</Text>
            <Text style={styles.paginationDot}>•</Text>
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
    flex: 1,
    backgroundColor: '#e8f6f6',
  },
  content: {
    flexGrow: 1,
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
    color: '#006D77',
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
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
    alignItems: 'center',
  },
  paginationDot: {
    fontSize: 25,
    color: '#a8d8d8',
    marginHorizontal: 3,
  },
});

export default OnboardingScreen2;
