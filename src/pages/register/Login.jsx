import React, { useState } from 'react';
import "./login.css";

function Login() {
  const [user_email, setEmail] = useState('');
  const [user_password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envía la solicitud de inicio de sesión al servidor
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
    <div className='formContainer'>
      <h2 className='loginLabel'>Welcome Back!</h2>
      <form onSubmit={handleSubmit} className="loginForm">
        <label className='emailLabel'>
           E-mail:
          <input
            type="email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className='passwordLabel'>
          Password:
          <input
            type="password"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className='buttonLogin'>Login</button>
      </form>
    </div>
  );
}

export default Login;
