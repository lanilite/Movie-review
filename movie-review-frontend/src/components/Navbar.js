// src/components/Navbar.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="brand-title">Movie Review</Link>
            <div className="navbar-toggle" onClick={toggleNavbar}>
                <span className="navbar-toggle-icon">&#9776;</span>
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={toggleNavbar}>Home</Link>
                <Link to="/movies" onClick={toggleNavbar}>Movies</Link>
                <Link to="/add-movie" onClick={toggleNavbar}>Add Movie</Link>
                <Link to="/reviews" onClick={toggleNavbar}>Reviews</Link>
                <Link to="/add-review" onClick={toggleNavbar}>Add Review</Link>
                {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
