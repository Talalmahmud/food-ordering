"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import UserProvider from "./UserContext";

const AppProvider = ({ children }) => {
  return (
    <SessionProvider>
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  );
};

export default AppProvider;
