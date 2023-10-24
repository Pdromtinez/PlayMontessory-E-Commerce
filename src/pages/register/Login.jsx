import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./login.css";
import { Link } from 'react-router-dom';

function Login() {
  const [user_email, setEmail] = useState('');
  const [user_password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_email, user_password }),
    });

    if (response.ok) {
      const data = await response.json();
    } else {
      console.error('Error en el inicio de sesión');
    }
  };

  return (
    <>
    <div className='formContainer'>
      <h2 className='loginLabel'>Welcome Back!</h2>
      <Form onSubmit={handleSubmit} className="loginForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className='buttonLogin' type="submit">
          Login
        </Button>
      </Form>
    </div>
    <div className='account'>
    <h2 className='loginLabel'>You don't have an account?</h2>
    <Link to ="/register"><Button className='buttonLogin' type="submit">
    Sing Up For Free
    </Button>
    </Link>
    </div>
    </>
  );
}

export default Login;
