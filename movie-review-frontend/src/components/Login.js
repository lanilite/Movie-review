import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css'; // Reusing the same CSS as Register

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
        // Implement your login logic here
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/');
};


    return (
        <div className="register-container"> {/* Reusing the same class as Register */}
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
