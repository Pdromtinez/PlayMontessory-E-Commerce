import '../Counter/counter.css'
import React, { useState } from 'react';
function BtnCart({initialCount, onUpdate}) {
  const [count, setCount] = useState(initialCount);
  const handleButtonClick = (operation) => {
 if (operation === 'decrement' && count>0) {
          const newCount = count - 1;
            setCount(newCount);
            onUpdate (newCount);
    }
  };
  return (
    <div className='Counter'>
      <button  className="btn-counter" onClick={() => handleButtonClick('decrement')} > Buy Now </button>
      <span>{count}</span>
    </div>
  );
}
export default BtnCart;