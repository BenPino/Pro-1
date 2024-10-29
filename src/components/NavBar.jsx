import React from "react";

const NavBar = ({ cart }) => {
  return (
    <div className="NavBar">
      <div className="NavDiv NavUser">Hello, Ben</div>
      <div className="NavDiv NavTitle">
        <h1>Grocer App🍎</h1>
      </div>
      <div className="NavDiv NavCart">
        Cart Items:{" "}
        <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
      </div>
    </div>
  );
};

export default NavBar;
