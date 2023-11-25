"use client";

import AddItem from "@/app/ui/modals/AddItem";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MenuItems = () => {
  const [itemList, setItemList] = useState([]);
  const [selectItem, setSelectItem] = useState();
  const [showModal, setShowModal] = useState(false);
  const [allItemsList, seAllItemsLis] = useState([]);

  const getItems = async () => {
    axios
      .get("/api/category")
      .then((res) =>
        setItemList(
          res.data?.map((item, key) => ({
            label: item.name,
            value: item._id,
            id: key,
          }))
        )
      )
      .catch((error) => console.log(error));
  };

  // const payloadMethod = {
  //   image: imageUrl,
  //   name: menuData.name,
  //   description: menuData.description,
  //   category: selectItem?.value,
  //   basePrice: menuData.basePrice,
  //   sizes: menuData.sizes,
  //   extraIngredients: menuData.extraIngredients,
  // };
  const payloadMethod = {
    image: "img.jpg",
    name: "Pisdad",
    description: "test description",
    category: selectItem?.value,
    basePrice: 200,
    sizes: [{ name: "middle", price: 12 }],
    extraIngredients: [{ name: "test", price: 12 }],
  };
  const getAllMenuItem = async () => {
    await axios
      .get("/api/menu-items")
      .then((res) => seAllItemsLis(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllMenuItem();
    getItems();
  }, []);

  // const addHandle = () => {
  //   console.log(payloadMethod);
  //   axios
  //     .post(
  //       `/api/menu-items`,
  //       {
  //         image: "img.jpg",
  //         name: "Pisdad",
  //         description: "test description",
  //         category: selectItem?.value,
  //         basePrice: 200,
  //         sizes: [{ name: "middle", price: 12 }],
  //         extraIngredientPrices: [{ name: "test", price: 12 }],
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // };
  // console.log(allItemsList);
  return (
    <div>
      <div
        className=" py-2 w-[110px] flex justify-center items-center my-4  bg-slate-700 text-white font-bold rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Add Items
      </div>
      {showModal && (
        <AddItem
          setShowModal={setShowModal}
          selectItem={selectItem}
          itemList={itemList}
          setSelectItem={setSelectItem}
        />
      )}

      <p className=" text-black font-bold text-2xl my-2">Items List:</p>
      <div className="flex flex-col gap-2">
        {allItemsList.map((item, index) => (
          <div key={index} className="flex items-center gap-4 bg-slate-400">
            <p className=" text-xl font-bold">1.{item.name}</p>
            <div className="relative overflow-auto h-[40px] w-[40px] rounded-md">
              <Image src={item.image} alt="" layout="fill" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
