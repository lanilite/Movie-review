// MovieList.js
import React, { useState } from 'react';
import './MovieList.css';

const MovieList = ({ movies, deleteMovie, editMovie, updateMovie }) => {
    const [editMode, setEditMode] = useState(null);
    const [title, setTitle] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [director, setDirector] = useState('');
    const [genre, setGenre] = useState('');

    const handleEditClick = (movie) => {
        setEditMode(movie.id);
        setTitle(movie.title);
        setReleaseYear(movie.releaseYear);
        setDirector(movie.director);
        setGenre(movie.genre);
    };

    const handleUpdate = (id) => {
        updateMovie({ id, title, releaseYear, director, genre });
        setEditMode(null);
    };

    return (
        <div className="movie-list-container">
            <h2 className="movie-list-title">Movie List</h2>
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    {editMode === movie.id ? (
                        <div className="edit-form">
                            <label>
                                Title:
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </label>
                            <label>
                                Release Year:
                                <input type="text" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
                            </label>
                            <label>
                                Director:
                                <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
                            </label>
                            <label>
                                Genre:
                                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                            </label>
                            <button onClick={() => handleUpdate(movie.id)}>Update</button>
                            <button onClick={() => setEditMode(null)}>Cancel</button>
                        </div>
                    ) : (
                        <div className="movie-details">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-detail"><strong>Release Year:</strong> {movie.releaseYear}</p>
                            <p className="movie-detail"><strong>Director:</strong> {movie.director}</p>
                            <p className="movie-detail"><strong>Genre:</strong> {movie.genre}</p>
                            <div className="movie-card-buttons">
                                <button className="edit-button" onClick={() => handleEditClick(movie)}>Edit</button>
                                <button className="delete-button" onClick={() => deleteMovie(movie.id)}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MovieList;
