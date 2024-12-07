import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

// Replace this with your actual logo path
import logo from '../../assets/images/BMI.png'; // Assuming logo is in the assets folder

const OnboardingScreen3 = ({ navigation }) => {
  const handleSkip = () => {
    // Navigate to the Auth screen
    navigation.navigate('Auth');
  };

  const handleDiscover = () => {
    // Navigate to the next onboarding screen
    navigation.navigate('OnboardingScreen4');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>Track and Calculate</Text>
        <Image source={logo} style={styles.logo} />

        {/* Yellow description container */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.appDescription}>
            Keep track of your health and progress with our smart tools:
            {"\n"}
            <Text>• BMI Calculator: Understand your ideal pregnancy weight range.</Text>
            {"\n"}
            <Text>• Calorie Needs Calculator: Find out the calories you and your baby need daily.</Text>
            {"\n"}
            <Text>• Weight Tracker: Monitor your weight gain across trimesters.</Text>
            {"\n"}
            Stay informed and in control every step of the way!
          </Text>
        </View>
      </ScrollView>

      {/* Footer container */}
      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSkip} style={styles.button}>
            <Text style={[styles.buttonText, { color: '#3aafa9' }]}>Skip</Text>
          </TouchableOpacity>

          {/* Pagination Dots */}
          <View style={styles.pagination}>
            <Text style={styles.paginationDot}>•</Text>
            <Text style={styles.paginationDot}>•</Text>
            <Text style={[styles.paginationDot, { color: '#006D77' }]}>•</Text>
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
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginVertical: 15,
    marginBottom:50,
  },
  welcomeText: {
    paddingTop:15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#006D77',
    marginBottom: 30,
  },
  descriptionContainer: {
    backgroundColor: '#F9F7EB',
    padding: 20,
    borderRadius: 30,
    borderColor: '#E29579',
    borderWidth: 1,
    width: '90%',
    marginBottom: 30,
  },
  appDescription: {
    fontSize: 16,
    color: '#444',
    textAlign: 'left',
  },
  footerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
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

export default OnboardingScreen3;
