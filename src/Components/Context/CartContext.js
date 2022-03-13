import React, { createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  useEffect(() => {
    const allCart = JSON.parse(localStorage.getItem("cart"));
    if (allCart) setCart(allCart);
  }, []);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
