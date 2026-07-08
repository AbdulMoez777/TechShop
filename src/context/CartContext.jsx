import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();
import { initialProducts } from "../data/product";

export const CartProvider = (props) => {
  const products = initialProducts;

  const [cart, setCart] = useState([]);

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

  //   Remove Item from Cart
  const removeFromCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      } else {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  //   For Clear Cart
  const clearCart = () => setCart([]);

  //Cart Count Quantity
  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  //Cart Total Price
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  return (
    <CartContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
