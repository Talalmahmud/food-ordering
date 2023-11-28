"use client";

import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const Cart = () => {
  const { cartList, setCartList } = useContext(UserContext);
  const navigate = useRouter();
  useEffect(() => {
    setCartList(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, [setCartList]);

  const onDelete = (id) => {
    const localData = JSON.parse(localStorage.getItem("cartItems"));
    const filterData = localData?.filter((item) => (item !== item.id) === id);
    const filterJson = JSON.stringify(filterData);
    localStorage.setItem("cartItems", filterJson);
    setCartList(JSON.parse(localStorage.getItem("cartItems")) || []);
  };

  return (
    <div className="min-h-[100vh]">
      <p className=" text-primary text-4xl text-center py-2">Cart list</p>
      <div className="overflow-x-auto py-10">
        <table className="min-w-full  border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">S No.</th>
              <th className="py-2 px-4 border-b text-center">Name</th>
              <th className="py-2 px-4 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartList?.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4 text-center">{item.name}</td>
                <td className="py-2 px-4 flex justify-center gap-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => navigate.push("/product")}
                  >
                    View
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
