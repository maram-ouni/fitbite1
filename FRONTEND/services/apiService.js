

import axios from 'axios';

const API_URL = 'http://192.168.56.1:5000/api'; // Replace with your actual backend URL

export const signUpUser = async (userData) => {
    const user = {
        email: userData.email,
        motDePasse: userData.motDePasse,
    };

    try {
        console.log('Sign-up Data:', user);
        const response = await axios.post(`${API_URL}/auth/inscrire`, user);
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Sign-up Error:', error);
        throw error.response?.data || error.message;
    }
};
export const loginUser = async (userData) => {
    const user = {
        email: userData.email,
        motDePasse: userData.motDePasse,
    };

    try {
        console.log('Login Data:', user);
        const response = await axios.post(`${API_URL}/auth/connexion`, user);
        console.log('Response:', response.data);
        return response.data; // Contient l'utilisateur connecté
    } catch (error) {
        console.error('Login Error:', error);
        throw error.response?.data || error.message;
    }
};


// Créer un formulaire dynamique
export const createFormulaire = async (formData) => {
    try {
        console.log('Creating Form:', formData);
        const response = await axios.post(`${API_URL}/formulaireDynamique`, formData);
        console.log('Formulaire Created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Create Form Error:', error);
        throw error.response?.data || error.message;
    }
};

// Obtenir tous les formulaires dynamiques
export const getFormulaires = async () => {
    try {
        const response = await axios.get(`${API_URL}/formulaireDynamique`);
        console.log('Formulaires:', response.data);
        return response.data;
    } catch (error) {
        console.error('Get Formulaires Error:', error);
        throw error.response?.data || error.message;
    }
};

// Mettre à jour un formulaire dynamique
export const updateFormulaire = async (id, formData) => {
    try {
        const response = await axios.put(`${API_URL}/formulaireDynamique/${id}`, formData);
        console.log('Formulaire Updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Update Form Error:', error);
        throw error.response?.data || error.message;
    }
};

// Supprimer un formulaire dynamique
export const deleteFormulaire = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/formulaireDynamique/${id}`);
        console.log('Formulaire Deleted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Delete Form Error:', error);
        throw error.response?.data || error.message;
    }
};
