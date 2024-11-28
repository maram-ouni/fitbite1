import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Slider } from '@react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const AddRecipeScreen = () => {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(30); // Par défaut 30 minutes

  return (
    <View style={styles.container}>
      {/* Bouton "Cancel" */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>1/3</Text>
      </View>

      {/* Section Image */}
      <TouchableOpacity style={styles.imageUpload}>
        <Icon name="person-outline" size={50} color="#aaa" />
        <Text style={styles.uploadText}>Add Cover Photo</Text>
        <Text style={styles.uploadSubtext}>(up to 12 Mb)</Text>
      </TouchableOpacity>

      {/* Nom du Plat */}
      <Text style={styles.label}>Food Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter food name"
        value={foodName}
        onChangeText={(text) => setFoodName(text)}
      />

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Tell a little about your food"
        multiline
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      {/* Durée de cuisson */}
      <Text style={styles.label}>Cooking Duration (in minutes)</Text>
      <Slider
        value={duration}
        onValueChange={(value) => setDuration(value)}
        minimumValue={10}
        maximumValue={60}
        step={1}
        thumbTintColor="#6EC1E4"
        minimumTrackTintColor="#6EC1E4"
        maximumTrackTintColor="#ddd"
      />
      <View style={styles.sliderLabels}>
        <Text>{'<10'}</Text>
        <Text>{duration}</Text>
        <Text>{'>60'}</Text>
      </View>

      {/* Bouton Suivant */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Barre de navigation */}
      <View style={styles.navbar}>
        <Icon name="grid-outline" size={25} color="#aaa" />
        <Icon name="book-outline" size={25} color="#6EC1E4" />
        <Icon name="create-outline" size={25} color="#aaa" />
        <Icon name="heart-outline" size={25} color="#aaa" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FCFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cancelText: {
    color: '#FF6B6B',
    fontSize: 16,
  },
  stepText: {
    color: '#aaa',
    fontSize: 16,
  },
  imageUpload: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  uploadText: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  uploadSubtext: {
    fontSize: 12,
    color: '#aaa',
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#6EC1E4',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default AddRecipeScreen;
