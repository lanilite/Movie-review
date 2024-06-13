import React, { useState } from 'react';
import './ReviewList.css';

const ReviewList = ({ reviews, deleteReview, updateReview }) => {
    const [editMode, setEditMode] = useState(null);
    const [editedReview, setEditedReview] = useState({
        id: null,
        title: '',
        rating: '',
        comment: ''
    });

    const handleEditClick = (review) => {
        setEditMode(review.id);
        setEditedReview({
            id: review.id,
            title: review.title,
            rating: review.rating,
            comment: review.comment
        });
    };

    const handleUpdate = () => {
        updateReview(editedReview);
        setEditMode(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedReview((prevReview) => ({
            ...prevReview,
            [name]: value
        }));
    };

    return (
        <div className="review-list-container">
            <h2 className="review-list-title">Review List</h2>
            {reviews.map((review) => (
                <div key={review.id} className="review-card">
                    {editMode === review.id ? (
                        <div className="edit-form">
                            <label>
                                Title:
                                <input
                                    type="text"
                                    name="title"
                                    value={editedReview.title}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Rating:
                                <input
                                    type="text"
                                    name="rating"
                                    value={editedReview.rating}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Comment:
                                <input
                                    type="text"
                                    name="comment"
                                    value={editedReview.comment}
                                    onChange={handleChange}
                                />
                            </label>
                            <button className="update-button" onClick={handleUpdate}>Update</button>
                            <button className="cancel-button" onClick={() => setEditMode(null)}>Cancel</button>
                        </div>
                    ) : (
                        <div className="review-details">
                        <h3 className="review-title">{review.title}</h3>
                        <p className="review-detail"><strong>Rating:</strong> {review.rating}</p>
                        <p className="review-detail"><strong>Comment:</strong> {review.comment}</p>
                        <div className="review-card-buttons">
                            <button className="edit-button" onClick={() => handleEditClick(review)}>Edit</button>
                            <button className="delete-button" onClick={() => deleteReview(review.id)}>Delete</button>
                          </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
