

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
       
        return response.data;
    } catch (error) {
        console.error('Sign-up Error:', error);
        throw error.response?.data || error.message;
    }
};

export const getRecipes = async () => {
    try {
        const response = await axios.get(`${API_URL}/recettes`);
        console.log('Recipes:', response.data); // Logs the recipes
        return response.data; // Return the recipe data
    } catch (error) {
        console.error('Error fetching recipes:', error);}}

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

export const addRecipe = async (recipeData) => {
    try {
      const response = await axios.post(`${API_URL}/recettes`, recipeData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data; // Retourne la réponse de l'API (par exemple, la recette ajoutée)
    } catch (error) {
      console.error('Error adding recipe:', error);
      throw error;
    }
  };

  // Récupérer les ingrédients
export const getIngredients = async () => {
    try {
        const response = await axios.get(`${API_URL}/ingredients`);
        console.log('Ingredients:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching ingredients:', error);}}


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

// Ajouter un nouvel ingrédient
export const addIngredient = async (ingredientData) => {
    try {
        const response = await axios.post(`${API_URL}/ingredients`, ingredientData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data; // Retourne l'ingrédient ajouté
    } catch (error) {
        console.error('Error adding ingredient:', error);}}
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

// Mettre à jour une recette avec des ingrédients
export const updateRecipeWithIngredients = async (recipeId, {ingredients}) => {
    try {
        const response = await axios.put(`${API_URL}/recettes/${recipeId}`, { ingredients }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data; // Retourne la recette mise à jour
    } catch (error) {
        console.error('Error updating recipe:', error);}}
// Mettre à jour un formulaire dynamique


export const updateRecipeWithInstructions = async (recipeId, {instructions}) => {
    try {
        const response = await axios.put(`${API_URL}/recettes/${recipeId}`, { instructions }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data; // Retourne la recette mise à jour
    } catch (error) {
        console.error('Error updating instructions:', error);
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
    