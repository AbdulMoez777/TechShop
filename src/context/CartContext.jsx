import { createContext, useContext, useState } from "react";

const CartContext = createContext();
import { initialProducts } from "../data/product";

export const CartProvider = (props) => {
  const products = initialProducts;

  const [cart, setCart] = uCeState([]);

  //   Add item into the Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  




  return (
    <CartContext.Provider value={{ products }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
