import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className="ProductCard">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <h4>{product.brand}</h4>
      <p>{product.price}</p>
      <div className="ProductQuantityDiv">
        <button className="QuantityBtn" onClick={decreaseQuantity}>
          -
        </button>
        <span>{quantity}</span>
        <button className="QuantityBtn" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
