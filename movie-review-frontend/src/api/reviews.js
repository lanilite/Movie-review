import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reviews';

export const getAllReviews = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createReview = async (review) => {
    const response = await axios.post(API_URL, review);
    return response.data;
};
