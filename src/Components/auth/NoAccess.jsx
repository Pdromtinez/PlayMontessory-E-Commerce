import React from 'react';

const NoAccessPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Acceso Restringido</h2>
      <p>Lo siento, no tienes permiso para acceder a esta página.</p>
      {/* Puedes agregar un enlace de regreso a la página de inicio u otra página */}
      <a href="/">Volver a la página de inicio</a>
    </div>
  );
};

export default NoAccessPage;