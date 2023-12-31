"use client";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const selectForCart = (data) => {
    setCartList((prev) => [...prev, data]);
  };
  // useEffect(() => {
  //   // Stringify and store in localStorage whenever cartList changes
  //   const jsonData = JSON.stringify(cartList);
  //   localStorage.setItem("cartItems", jsonData);
  // }, [cartList]);

  return (
    <UserContext.Provider value={{ cartList, setCartList, selectForCart }}>
      {children}
    </UserContext.Provider>
  );
}
