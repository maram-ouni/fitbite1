import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

// Replace this with your actual logo path
import logo from '../../assets/images/logo1.png'; // Assuming logo is in the assets folder

const OnboardingScreen = () => {
  const handleSkip = () => {
    console.log("Onboarding Skipped");
    // Add your navigation logic here to move to the main app
    navigation.navigate('HomeScreen');
  };

  const handleDiscover = () => {
    console.log("Onboarding Completed");
    // Add your navigation logic here to move to the main app
    navigation.navigate('OnboardingScreen2');
  };

  return (
    <View style={styles.container}> {/* Use View instead of ScrollView to control footer positioning */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Image source={logo} style={styles.logo} />

        {/* Yellow container for the description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.appDescription}>
            Welcome to FitBite, the app designed to support you during your beautiful journey of motherhood! From nutrition guidance to personalized tracking tools, we’re here to make your pregnancy healthier and happier. Explore tailored features to meet the unique needs of you and your baby.
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
            <Text style={[styles.paginationDot, { color: '#006D77' }]}>•</Text> {/* First dot matching welcome color */}
            <Text style={styles.paginationDot}>•</Text>
            <Text style={styles.paginationDot}>•</Text>
            <Text style={styles.paginationDot}>•</Text>
            <Text style={styles.paginationDot}>•</Text>
          </View>

          <TouchableOpacity onPress={handleDiscover} style={styles.button}>
            <Text style={[styles.buttonText, { color: '#3aafa9' }]}>Discover</Text>
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
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006D77', // Color for the first pagination dot
    marginBottom: 10,
    marginTop:'20%'
  },
  descriptionContainer: {
    backgroundColor: '#F9F7EB',
    padding: 20,
    borderRadius: 30,
    borderColor: '#E29579',
    borderWidth: 1,
    marginBottom: 30,
    width: '90%',
  },
  appDescription: {
    fontSize: 16,
    textAlign: 'center',
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

export default OnboardingScreen;
