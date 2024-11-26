import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

// Replace this with your actual logo path
import logo from '../../assets/images/satisfaction.png'; // Assuming logo is in the assets folder

const OnboardingScreen5 = ({ navigation }) => {
  const handleSkip = () => {
    console.log("Onboarding Skipped");
    navigation.navigate('Auth');
  };

  const handleDiscover = () => {
    console.log("Onboarding Completed");
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: 50 }]}>
        {/* Welcome Text */}
        <Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Why Choose FitBite?</Text>
        
        {/* Logo Image */}
        <Image source={logo} style={[styles.logo, { marginTop: 8 }]} />

        {/* Description Container */}
        <View style={[styles.descriptionContainer, { marginTop: 20 }]}>
          <Text style={styles.appDescription}>
            Our mission is to empower and support pregnant women with a one-stop solution for all their nutritional and health needs. {"\n"}
            With Pregnancy Companion, you can:
          </Text>

          {/* List of Features */}
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.appDescription}>• Save time with ready-to-use tools.</Text>
            <Text style={styles.appDescription}>• Stay organized with detailed shopping lists and meal plans.</Text>
            <Text style={styles.appDescription}>• Focus on your well-being with accurate health insights.</Text>
          </View>

          {/* Final Line */}
          <Text style={styles.appDescription}>
            Let’s make your pregnancy journey as smooth and enjoyable as possible!
          </Text>
        </View>
      </ScrollView>

      {/* Footer Container */}
      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
          {/* Skip Button */}
          <TouchableOpacity onPress={handleSkip} style={styles.button}>
            <Text style={[styles.buttonText, { color: '#3aafa9' }]}>Skip</Text>
          </TouchableOpacity>

          {/* Pagination Dots */}
          <View style={styles.pagination}>
            <Text style={styles.paginationDot}>•</Text> {/* First dot matching welcome color */}
            <Text style={styles.paginationDot}>•</Text>
            <Text style={styles.paginationDot}>•</Text>
            <Text style={styles.paginationDot}>•</Text>
            <Text style={[styles.paginationDot, { color: '#006D77' }]}>•</Text>
          </View>

          {/* Next Button */}
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
    flex: 1, // Ensures the entire screen is used, allowing footer to stay at the bottom
    backgroundColor: '#e8f6f6',
  },
  content: {
    flexGrow: 1, // Allows scroll content to take as much space as it needs
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
    marginBottom: '5%', // Ensures footer is pushed to the bottom of the screen
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center', // Centers buttons and dots vertically
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
    alignItems: 'center', // Ensures that dots are vertically aligned with buttons
  },
  paginationDot: {
    fontSize: 25,
    color: '#a8d8d8',
    marginHorizontal: 3,
  },
});

export default OnboardingScreen5;
