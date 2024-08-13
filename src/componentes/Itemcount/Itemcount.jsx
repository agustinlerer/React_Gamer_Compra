import React, { useState } from 'react';
import "./Itemcount.css"
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

  return (
    <div>
      <p >Cantidad: {count}</p>
      <button  className='buttonDetail' onClick={handleAdd}>+</button>
      <button  className='buttonDetail' onClick={handleSubtract}>-</button>
      <button  className='buttonDetail' onClick={()=>onAdd(count)}>Comprar</button>
    </div>
  );
}

export default Counter;