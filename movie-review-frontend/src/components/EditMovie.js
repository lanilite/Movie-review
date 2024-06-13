import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieForm.css';

const EditMovie = ({ match, history }) => {
    const [formData, setFormData] = useState({
        title: '',
        release_year: '',
        director: '',
        genre: ''
    });

    const { title, release_year, director, genre } = formData;

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/movies/${match.params.id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('There was an error fetching the movie!', error);
            }
        };

        fetchMovie();
    }, [match.params.id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/movies/${match.params.id}`, formData);
            history.push('/movies');
        } catch (error) {
            console.error('There was an error updating the movie!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="movie-form">
            <h2>Edit Movie</h2>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Release Year:
                <input
                    type="number"
                    name="release_year"
                    value={release_year}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Director:
                <input
                    type="text"
                    name="director"
                    value={director}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Genre:
                <input
                    type="text"
                    name="genre"
                    value={genre}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Update Movie</button>
        </form>
    );
};

export default EditMovie;
