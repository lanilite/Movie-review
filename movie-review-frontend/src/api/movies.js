import axios from 'axios';

const API_URL = 'http://localhost:5000/api/movies';

export const getAllMovies = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createMovie = async (movie) => {
    const response = await axios.post(API_URL, movie);
    return response.data;
};
