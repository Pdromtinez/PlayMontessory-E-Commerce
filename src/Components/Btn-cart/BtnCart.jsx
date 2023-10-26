import './Cart.css'
import React, { useState, useEffect } from 'react';
function BtnCart({ initialCount, onUpdate }) {
  const [count, setCount] = useState(initialCount);
  const [animation, setAnimation] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = (operation) => {
    if (operation === 'decrement' && count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onUpdate(newCount);
      setAnimation(true); // Activa la animación
      setShowAlert(true); // Muestra la alerta
    }
  };

  useEffect(() => {
    if (animation) {
      const timeout = setTimeout(() => {
        setAnimation(false);
      }, 1000); // Desactiva la animación después de 1 segundo
      return () => clearTimeout(timeout);
    }
  }, [animation]);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000); // Oculta la alerta después de 2 segundos
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  return (
    <div className={`Counter ${animation ? 'animate' : ''}`}>
      
      <button className="buttonLogin" onClick={() => handleButtonClick('decrement')}>
        Add to cart
      </button>
      {showAlert && <div className="alert">Product added to cart</div>}
      <span className='stock-product'>Stock: {count}</span>
    </div>
  );
}

export default BtnCart;
