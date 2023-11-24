"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const route = usePathname();

  return (
    <>
      <p className="text-center py-10 mt-10 shadow-xl rounded-md">
        &copy; 2023 All rights reserved.
      </p>
    </>
  );
};

export default Footer;
