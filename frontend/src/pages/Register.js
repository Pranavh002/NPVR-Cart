import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import '../styles/register.css';


const Register = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    try {
      await axios.post('http://localhost:8000/auth/register', { name, number, email, password });
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/login'; // Redirect to login after 2 seconds
      }, 2000);
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Container fluid="md" className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} sm={12}>
          <div className="register-container">
            <h2 className="text-center mb-4">Create an Account</h2>
            <Form onSubmit={handleRegister}>

              {/* Name Field */}
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="custom-input"
                />
              </Form.Group>

              {/* Phone Number Field */}
              <Form.Group controlId="formPhoneNumber">
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  className="custom-input"
                />
              </Form.Group>

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
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="custom-input"
                />
              </Form.Group>

              {/* Error or Success Alert */}
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">Registration successful! Redirecting...</Alert>}

              {/* Submit Button */}
              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
            <div className="text-center mt-4">
              <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
