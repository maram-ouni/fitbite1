



import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { getUserInfo, updateUserInfo } from '../../services/apiService'; // Assurez-vous d'importer vos fonctions API
import { useUser } from '../../services/Usercontext'; // Importer le hook pour accéder au contexte
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../styles/colors';

const ProfileScreen = () => {
    const { userId, logout } = useUser(); // Ajout de la fonction logout depuis le contexte
    const navigation = useNavigation(); // Hook pour naviguer entre les écrans
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState(null); // État pour gérer la photo

    // Demander les permissions pour accéder à la galerie
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert("Permission to access gallery is required!");
            }
        })();
    }, []);

    // Récupérer les données utilisateur depuis l'API
    useEffect(() => {
        if (userId) {
            const fetchUserData = async () => {
                try {
                    const data = await getUserInfo(userId);
                    setUserData(data);
                    setName(data.nom || '');
                    setSurname(data.prenom || '');
                    setAge(data.age ? data.age.toString() : '');
                    setPhoto(data.photo || null); // Charger la photo si elle existe
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchUserData();
        }
    }, [userId]);

    // Fonction pour sauvegarder les données utilisateur mises à jour
    const handleSave = async () => {
        try {
            const updatedUserData = {
                nom: name,
                prenom: surname,
                age: age,
                photo: photo, // Inclure la photo (base64 si modifiée)
            };

            await updateUserInfo(userId, updatedUserData);
            alert('Information saved successfully!');
        } catch (err) {
            setError(err.message);
        }
    };

    // Fonction pour choisir une image depuis la galerie
    const pickImageFromGallery = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true, // Convertir l'image en base64
            });

            if (!result.canceled) {
                setPhoto(`data:image/jpeg;base64,${result.assets[0].base64}`);
            }
        } catch (error) {
            console.log("Error picking image:", error);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text style={styles.errorText}>{error}</Text>;
    }

    return (

        <LinearGradient
        colors={COLORS.gradients.background.colors}
        locations={COLORS.gradients.background.locations}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
    >
        <View >
            {/* Boutons Back et Logout */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Auth')} style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>My Profile</Text>

            {/* Section pour choisir et afficher l'image */}
            <TouchableOpacity style={styles.imageContainer} onPress={pickImageFromGallery}>
                {photo ? (
                    <Image source={{ uri: photo }} style={styles.profileImage} />
                ) : (
                    <View style={styles.imagePlaceholder}>
                        <Text style={styles.uploadText}>Add Photo</Text>
                        <Text style={styles.uploadLimit}>(12 MB max)</Text>
                    </View>
                )}
            </TouchableOpacity>

            {/* Name Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />
            </View>

            {/* Surname Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Surname</Text>
                <TextInput
                    style={styles.input}
                    value={surname}
                    onChangeText={setSurname}
                    placeholder="Enter your surname"
                />
            </View>

            {/* Age Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Age</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={setAge}
                    placeholder="Enter your age"
                    keyboardType="numeric"
                />
            </View>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerButton: {
        padding: 10,
        borderRadius: 8,
    },
    headerButtonText: {
        color: "#E29578",
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primary.dark,
        marginBottom: 20,
        textAlign: 'center',
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
    saveButton: {
        marginTop: 20,
        backgroundColor: '#006D77',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    imagePlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#DDD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadText: {
        fontSize: 14,
        color: '#666',
    },
    uploadLimit: {
        fontSize: 12,
        color: '#999',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ProfileScreen;

