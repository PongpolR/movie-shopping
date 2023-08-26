/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

export function useCartContext() {
  return useContext(CartContext);
}

const initialCart = {
  items: [],
};

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || initialCart
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((prevCart) => ({
      ...prevCart,
      items: [...prevCart.items, product],
    }));
    // localStorage.setItem("cart", JSON.stringify(cart));
  }

  function clearCart() {
    setCart(initialCart);
    // localStorage.setItem("cart", JSON.stringify(cart));
  }

  const cartStore = {
    cart,
    cartAction: {
      addToCart,
      clearCart,
    },
  };

  return (
    <CartContext.Provider value={cartStore}>{children}</CartContext.Provider>
  );
}
