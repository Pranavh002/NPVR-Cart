import React, { useState } from 'react';
import axios from 'axios';

const LoginModal = ({ show, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!show) return null;

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            onClose();
            window.location.reload(); // Reload to reflect authentication
        } catch (error) {
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
