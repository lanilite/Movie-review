import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact component={MovieList} />
                <Route path="/add-movie" component={MovieForm} />
                <Route path="/reviews" component={ReviewList} />
                <Route path="/add-review" component={ReviewForm} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Routes>
        </Router>
    );
};

export default Routes;
