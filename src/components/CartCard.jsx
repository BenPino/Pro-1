import React from "react";

const CartCard = ({ item, removeFromCart, purchaseItem }) => {
  return (
    <div className="CartCard">
      <div className="CartCardInfo">
        <p>{item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="CartListBtns">
        <button
          className="RemoveButton"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
        <button id="BuyButton" onClick={() => purchaseItem(item.id)}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default CartCard;
