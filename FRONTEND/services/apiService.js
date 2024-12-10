import axios from 'axios';

const API_URL = 'http://192.168.80.147:5000/api/auth'; // Replace with your actual backend URL

export const signUpUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response?.data || error.message;
    }
};
