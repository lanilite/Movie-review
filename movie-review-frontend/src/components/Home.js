// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Movie Review</h1>
                <p>Your ultimate destination for movie reviews and ratings</p>
            </header>
            <div className="home-content">
                <div className="card">
                    <h2>Discover Movies</h2>
                    <p>Explore a wide range of movies and read reviews from other movie enthusiasts.</p>
                </div>
                <div className="card">
                    <h2>Write Reviews</h2>
                    <p>Share your thoughts on the latest movies you've watched and help others decide what to watch next.</p>
                </div>
                <div className="card">
                    <h2>Join the Community</h2>
                    <p>Sign up now to become a part of our movie-loving community and start sharing your reviews.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
