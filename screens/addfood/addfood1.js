import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../styles/colors';
import Button from '../../components/Button'; // Bouton personnalisé

const AddFoodScreen = ({ navigation }) => {
  const [sliderValue, setSliderValue] = useState(2); // Index initial correspondant à 30
  const [isFoodNameFocused, setFoodNameFocused] = useState(false);
  const [isDescriptionFocused, setDescriptionFocused] = useState(false);

  const durationValues = ['>10', '10', '30', '60', '<60']; // Les valeurs textuelles

  return (
    <LinearGradient
      colors={COLORS.gradients.background.colors}
      locations={COLORS.gradients.background.locations}
      style={styles.container}
    >
      {/* Cancel and Step Tracker */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.stepTracker}>1/3</Text>
      </View>

      {/* Add Cover Photo */}
      <View style={styles.addPhotoContainer}>
        <TouchableOpacity style={styles.photoBox}>
          <Image source={require('../../assets/images/addimage.png')} style={styles.photoIcon} />
          <Text style={styles.photoText}>Add Cover Photo</Text>
          <Text style={styles.photoSubtext}>(up to 12 MB)</Text>
        </TouchableOpacity>
      </View>

      {/* Food Name Input */}
      <Text style={styles.label}>Food Name</Text>
      <TextInput
        placeholder="Enter food name"
        style={[styles.input, isFoodNameFocused && styles.inputFocused]}
        onFocus={() => setFoodNameFocused(true)}
        onBlur={() => setFoodNameFocused(false)}
      />

      {/* Description Input */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        placeholder="Tell a little about your food"
        style={[styles.input, styles.descriptionInput, isDescriptionFocused && styles.inputFocused]}
        multiline
        onFocus={() => setDescriptionFocused(true)}
        onBlur={() => setDescriptionFocused(false)}
      />

      {/* Cooking Duration */}
      <View style={styles.cookingDurationContainer}>
        <Text style={[styles.label, styles.durationLabel]}>
          Cooking Duration <Text style={styles.minutesText}>( in minutes )</Text>
        </Text>

        {/* Slider */}
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={4} // 5 valeurs : index de 0 à 4
          step={1} // Étapes fixes pour correspondre aux index
          onValueChange={(value) => setSliderValue(value)}
          value={sliderValue}
          minimumTrackTintColor="#FFDDD2"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#FFDDD2"
        />

        {/* Custom Labels */}
        <View style={styles.sliderLabelsContainer}>
          {durationValues.map((label, index) => (
            <Text key={index} style={styles.sliderLabel}>
              {label}
            </Text>
          ))}
        </View>
      </View>

      {/* Next Button */}
      <Button 
        title="Next" 
        onPress={() => navigation.navigate('addfood2')} 
        style={styles.button} 
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 70, // Added space to avoid overlap with bottom navbar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  cancelButton: {
    color: '#e29579',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepTracker: {
    color: '#444',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addPhotoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  photoBox: {
    width: 200,
    height: 150,
    borderWidth: 2,
    borderColor: '#a9a9a9',
    borderRadius: 15,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  photoText: {
    color: '#444',
    fontSize: 14,
    fontWeight: 'bold',
  },
  photoSubtext: {
    color: '#a9a9a9',
    fontSize: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: '#006D77',
    borderWidth: 2,
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  cookingDurationContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#006D77',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  durationLabel: {
    flexDirection: 'row',
  },
  minutesText: {
    color: '#444',
    fontWeight: 'normal',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
    marginBottom: 10,
  },
  sliderLabel: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#3aafa9',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddFoodScreen;
