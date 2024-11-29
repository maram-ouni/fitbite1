import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

// Replace this with your actual logo path
import logo from '../../assets/images/logo1.png'; // Assuming logo is in the assets folder

const OnboardingScreen = ({ navigation }) => {
  const handleSkip = () => {
    // Navigate to authentication screen
    navigation.navigate('Auth');
  };

  const handleDiscover = () => {
    // Navigate to the next onboarding screen
    navigation.navigate('OnboardingScreen2');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Image source={logo} style={styles.logo} />

        {/* Description container */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.appDescription}>
            Welcome to <Text style={styles.highlight}>FitBite</Text>, the app designed to support you during your
            beautiful journey of motherhood! From nutrition guidance to personalized tracking tools, we’re here to make
            your pregnancy healthier and happier. Explore tailored features to meet the unique needs of you and your
            baby.
          </Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSkip} style={styles.button}>
            <Text style={[styles.buttonText, { color: '#3aafa9' }]}>Skip</Text>
          </TouchableOpacity>

          {/* Pagination Dots */}
          <View style={styles.pagination}>
            <Text style={[styles.paginationDot, { color: '#006D77' }]}>•</Text>
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
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006D77',
    marginBottom: 10,
    marginTop: '20%',
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
    lineHeight: 22,
  },
  highlight: {
    color: '#E29579',
    fontWeight: 'bold',
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

export default OnboardingScreen;
