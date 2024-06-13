import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ addReview }) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [reviewer, setReviewer] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addReview({ movieTitle, reviewer, rating, comment });
        setMovieTitle('');
        setReviewer('');
        setRating('');
        setComment('');
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Add New Review</h2>
            <form onSubmit={handleSubmit} className="review-form">
                <div className="form-group">
                    <label htmlFor="movieTitle">Movie Title</label>
                    <input
                        type="text"
                        id="movieTitle"
                        value={movieTitle}
                        onChange={(e) => setMovieTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="reviewer">Reviewer</label>
                    <input
                        type="text"
                        id="reviewer"
                        value={reviewer}
                        onChange={(e) => setReviewer(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="text"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Add Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
