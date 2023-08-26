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
    console.log(product);
    console.log(cart.items);
    let check = 0;

    if (cart.items.length > 0) {
      cart.items.filter((item) => {
        if (item.id === product.id) check = 1;
        return cart;
      });
    }

    if (check == 1) {
      alert("This movie in cart!");
    } else if (check == 0) {
      setCart((prevCart) => ({
        ...prevCart,
        items: [...prevCart.items, product],
      }));
    }

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
