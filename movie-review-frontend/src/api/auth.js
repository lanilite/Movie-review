import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const setCurrentUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};
