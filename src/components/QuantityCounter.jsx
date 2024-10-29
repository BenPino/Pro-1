import React from "react";

const QuantityCounter = ({ quantity, setQuantity }) => {
  return (
    <div className="quantity-counter">
      <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default QuantityCounter;
