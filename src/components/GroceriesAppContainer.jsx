import React, { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import products from "../data/products";

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Please add a quantity before adding to the cart.");
      return;
    }
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const emptyCart = () => setCart([]);

  return (
    <div className="GroceriesApp-Container">
      <NavBar cart={cart} />
      <ProductsContainer products={products} addToCart={addToCart} />
      <CartContainer cart={cart} emptyCart={emptyCart} />
    </div>
  );
};

export default GroceriesAppContainer;
