import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewForm.css';

const EditReview = ({ match, history }) => {
    const [formData, setFormData] = useState({
        movieId: '',
        reviewText: '',
        rating: '',
    });

    const { movieId, reviewText, rating } = formData;

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/reviews/${match.params.id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('There was an error fetching the review!', error);
            }
        };

        fetchReview();
    }, [match.params.id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/reviews/${match.params.id}`, formData);
            history.push('/reviews');
        } catch (error) {
            console.error('There was an error updating the review!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h2>Edit Review</h2>
            <label>
                Movie ID:
                <input
                    type="number"
                    name="movieId"
                    value={movieId}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Review Text:
                <textarea
                    name="reviewText"
                    value={reviewText}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Rating:
                <input
                    type="number"
                    name="rating"
                    value={rating}
                    onChange={handleChange}
                    required
                    min="1"
                    max="10"
                />
            </label>
            <button type="submit">Update Review</button>
        </form>
    );
};

export default EditReview;
