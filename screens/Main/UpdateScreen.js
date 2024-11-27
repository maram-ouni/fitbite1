import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';
import { COLORS } from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './Header';

const UpdateScreen = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [trimester, setTrimester] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [supplements, setSupplements] = useState('');
    const [doctorRemarks, setDoctorRemarks] = useState('');
    const handleSubmit = () => {
        // Handle your submit logic here
        console.log('Submit pressed');
    };

    return (
        <LinearGradient
            colors={COLORS.gradients.background.colors}
            locations={COLORS.gradients.background.locations}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.title}>Your information</Text>

                <TouchableOpacity style={styles.profilePicContainer}>
                    <View style={styles.profilePicCircle}>
                        <Image
                            source={require('../../assets/images/profile-placeholder.png')}
                            style={styles.profileIcon}
                        />
                    </View>
                    <Text style={styles.addPhotoText}>Add Profile Picture</Text>
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Height</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="in cm"
                        value={height}
                        onChangeText={setHeight}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Weight</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="in Kg"
                        value={weight}
                        onChangeText={setWeight}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Pregnancy trimester</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={trimester}
                            onValueChange={(itemValue) => setTrimester(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select trimester" value="" />
                            <Picker.Item label="First trimester" value="1" />
                            <Picker.Item label="Second trimester" value="2" />
                            <Picker.Item label="Third trimester" value="3" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Regular physical activity level</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={activityLevel}
                            onValueChange={(itemValue) => setActivityLevel(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select activity level" value="" />
                            <Picker.Item label="Sedentary" value="sedentary" />
                            <Picker.Item label="Light" value="light" />
                            <Picker.Item label="Moderate" value="moderate" />
                            <Picker.Item label="Active" value="active" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nutritional supplements taken</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter supplements"
                        value={supplements}
                        onChangeText={setSupplements}
                        multiline
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Doctor's Remarks</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter remarks"
                        value={doctorRemarks}
                        onChangeText={setDoctorRemarks}
                        multiline
                    />
                </View>

                <Button
                    title="Submit"
                    onPress={handleSubmit}
                    style={{ marginBottom: 20 }}
                />
            </ScrollView>


        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primary.dark,
        marginBottom: 20,
        textAlign: 'center',
    },
    profilePicContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profilePicCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileIcon: {
        width: 40,
        height: 40,
        tintColor: COLORS.primary.dark,
    },
    addPhotoText: {
        color: COLORS.primary.dark,
        fontSize: 16,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        padding: 12,
        backgroundColor: 'white',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        backgroundColor: 'white',
    },
    picker: {
        height: 50,
    },
});

export default UpdateScreen;