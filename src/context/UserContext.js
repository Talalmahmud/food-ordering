"use client";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const initialCartList = JSON.parse(localStorage.getItem("cartItems")) || [];

  const [cartList, setCartList] = useState(initialCartList);
  useEffect(() => {
    // Stringify and store in localStorage whenever cartList changes
    const jsonData = JSON.stringify(cartList);
    localStorage.setItem("cartItems", jsonData);
  }, [cartList]);
  return (
    <UserContext.Provider value={{ cartList, setCartList }}>
      {children}
    </UserContext.Provider>
  );
}
