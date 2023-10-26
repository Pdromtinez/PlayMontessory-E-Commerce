import React from 'react';
import "./NoAccess.css"
const NoAccessPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Restricted Access</h2>
      <p>Sorry, you don't have permission to accesses this page.</p>
      {/* Puedes agregar un enlace de regreso a la página de inicio u otra página */}
      <a className="returnHome" href="/">Return to Home page</a>
    </div>
  );
};

export default NoAccessPage;