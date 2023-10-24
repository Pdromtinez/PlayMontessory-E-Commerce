import React, { useState } from 'react';

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
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Correo Electrónico:
          <input
            type="email"
            value={user_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={user_password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
