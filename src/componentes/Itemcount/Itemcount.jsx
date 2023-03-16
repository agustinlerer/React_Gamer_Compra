import React, { useState } from 'react';

function Counter({onAdd}) {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) {
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
      <button onClick={()=>onAdd(count)}>Comprar</button>
    </div>
  );
}

export default Counter;