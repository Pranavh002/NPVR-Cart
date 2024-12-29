import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'; // Importing necessary Bootstrap components
import '../styles/login.css'; // Make sure to add custom styles if needed

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    try {
      const response = await axios.post('http://localhost:8000/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Save the token
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/'; // Redirect to home after 2 seconds
      }, 2000);
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container fluid="md" className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <div className="login-container">
            <h2 className="text-center mb-4">Login to Your Account</h2>
            <Form onSubmit={handleLogin}>

              {/* Email Field */}
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="custom-input"
                />
              </Form.Group>

              {/* Password Field */}
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="custom-input"
                />
              </Form.Group>

              {/* Error or Success Alert */}
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">Login successful! Redirecting...</Alert>}

              {/* Submit Button */}
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
            <div className="text-center mt-4">
              <p>Don't have an account? <a href="/register">Register here</a></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
