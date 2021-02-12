import React from "react";
import { useState } from "react";

export const CartContext = React.createContext({
  cart: [],
  setCart: () => {},
});

const CartWraper = ({ children }) => {
  const [cart, setCart] = useState([]);
  const cartValue = { cart, setCart };
  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartWraper;
