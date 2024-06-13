// src/App.js
import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList';
import Register from './components/Register';
import Login from './components/Login';
import MovieForm from './components/MovieForm';
import ReviewForm from './components/ReviewForm';
import { AuthContext } from './context/AuthContext';
import './App.css';

const App = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        const auth = localStorage.getItem('isAuthenticated');
        if (auth) {
            setIsAuthenticated(true);
        }
    }, [setIsAuthenticated]);

    const [movies, setMovies] = useState([]);
    const [editingMovie, setEditingMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [editingReview, setEditingReview] = useState(null);

    const addMovie = (movie) => {
        setMovies([...movies, { ...movie, id: movies.length + 1 }]);
    };

    const deleteMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    const editMovie = (id) => {
        setEditingMovie(id);
    };

    const updateMovie = (updatedMovie) => {
        setMovies(movies.map(movie => (movie.id === updatedMovie.id ? updatedMovie : movie)));
        setEditingMovie(null);
    };

    const addReview = (review) => {
        setReviews([...reviews, { ...review, id: reviews.length + 1 }]);
    };

    const deleteReview = (id) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    const updateReview = (updatedReview) => {
        setReviews(reviews.map(review => (review.id === updatedReview.id ? updatedReview : review)));
        setEditingReview(null);
    };

    return (
        <Router>
            <div className="main-content">
                <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<MovieList movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} updateMovie={updateMovie} />} />
                    <Route path="/add-movie" element={<MovieForm addMovie={addMovie} editingMovie={editingMovie} updateMovie={updateMovie} />} />
                    <Route path="/reviews" element={<ReviewList reviews={reviews} deleteReview={deleteReview} updateReview={updateReview}/>} />
                    <Route path="/add-review" element={<ReviewForm addReview={addReview} editingReview={editingReview} updateReview={updateReview} />} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
