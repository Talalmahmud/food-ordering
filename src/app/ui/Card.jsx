"use client";
import { UserContext } from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

const Card = () => {
  const { setCartList, cartList } = useContext(UserContext);

  const selectForCart = (data) => {
    // const array = localStorage.setItem("cartItems", jsonData);
    const array = JSON.parse(localStorage.getItem("cartItems")) || [];
    array?.push(data);
    const jsonData = JSON.stringify(array);
    localStorage.setItem("cartItems", jsonData);
    setCartList(JSON.parse(localStorage.getItem("cartItems")));
  };

  // useEffect(() => {
  //   // Stringify and store in localStorage whenever cartList changes
  //   const jsonData = JSON.stringify(cartList);
  //   localStorage.setItem("cartItems", jsonData);
  // }, [cartList]);
  return (
    <div className=" bg-gray-200 hover:bg-white shadow-xl flex  flex-col gap-2 items-center justify-center rounded p-2 transition-all">
      <Link
        href={"/product"}
        className=" relative overflow-auto h-[190px] w-full mb-2 cursor-pointer "
      >
        <Image
          src="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-13.png"
          alt="pizza"
          layout="fill"
          objectFit="contain"
        />
      </Link>

      <h1 className=" text-xl font-bold">pizza title</h1>
      <p className="text-sm text-center">
        It is very important for the customer to pay attention to the adipiscing
        process.
      </p>
      <button
        className=" text-white hover:bg-red-400 cursor-pointer  font-bold bg-primary rounded-full my-2  px-6  py-2 "
        onClick={() => selectForCart({ name: "Test", id: "2453" })}
      >
        Add to cart $20
      </button>
    </div>
  );
};

export default Card;
