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

const API_URL = 'http://localhost:5000/api'; // Replace with your actual backend URL

export const signUpUser = async (userData) => {
    const user = {
        email: userData.email,
        motDePasse: userData.motDePasse,
    };

    try {
        console.log('Sign-up Data:', user);
        const response = await axios.post(`http://192.168.56.1:5000/api/auth/inscrire`, user);
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Sign-up Error:', error);
        throw error.response?.data || error.message;
    }
};
