import React, { useState } from 'react';
import './MovieForm.css';

const MovieForm = ({ addMovie }) => {
    const [title, setTitle] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie({ title, releaseYear, director, genre });
        setTitle('');
        setReleaseYear('');
        setDirector('');
        setGenre('');
    };

    return (
        <div className="movie-form-container">
            <h2 className="form-title">Add New Movie</h2>
            <form onSubmit={handleSubmit} className="movie-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="releaseYear">Release Year</label>
                    <input
                        type="text"
                        id="releaseYear"
                        value={releaseYear}
                        onChange={(e) => setReleaseYear(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="director">Director</label>
                    <input
                        type="text"
                        id="director"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Movie</button>
            </form>
        </div>
    );
};

export default MovieForm;