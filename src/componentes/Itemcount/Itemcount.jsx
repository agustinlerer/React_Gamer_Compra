import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 0) {
        setCount(count - 1);
      }
  };

  const handlePurchase = () => {
    alert(`Cantidad en el contador: ${count}`);
  };

  return (
    <div>
      <p>Cantidad en el carrito: {count}</p>
      <button onClick={handleAdd}>Agregar</button>
      <button onClick={handleSubtract}>Restar</button>
      <button onClick={handlePurchase}>Comprar</button>
    </div>
  );
}

export default Counter;