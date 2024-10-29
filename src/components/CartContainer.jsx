import React from "react";
import CartCard from "./CartCard";

const CartContainer = ({ cart, emptyCart, removeFromCart }) => {
  return (
    <div className="CartContainer">
      {cart.map((item) => (
        <CartCard
          key={item.id}
          item={item}
          removeFromCart={removeFromCart} // Make sure this function is passed
        />
      ))}
      <button onClick={emptyCart}>Empty Cart</button>
    </div>
  );
};

export default CartContainer;
