// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api'; // Replace with your actual backend URL

// export const signUpUser = async (userData) => {
//     userData = {
//         email: userData.email,
//         motDePasse: userData.motDePasse
//     }
//     try {
//         console.log(userData);
//         const response = await axios.post(`/api/inscrire`, userData);
// console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error.response?.data || error.message;
//     }
// };

// // axios.post('http://10.0.2.2:5000/inscrire', {
// //     email: 'exemple@domain.com',
// //     MotDePasse: 'motdepasse'
// // })
// // .then(response => {
// //     console.log('Réponse :', response.data);
// // })
// // .catch(error => {
// //     console.error('Erreur :', error.response ? error.response.data : error.message);
// // });


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
export const getRecipes = async () => {
    try {
        const response = await axios.get(`${API_URL}/recettes`);
        console.log('Recipes:', response.data); // Logs the recipes
        return response.data; // Return the recipe data
    } catch (error) {
        console.error('Error fetching recipes:', error);
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
        console.error('Error fetching ingredients:', error);
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
        console.error('Error adding ingredient:', error);
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
        console.error('Error updating recipe:', error);
        throw error.response?.data || error.message;
    }
};

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