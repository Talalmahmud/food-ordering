"use client";
import DeleteButton from "@/app/icons/DeleteButton";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { toast } from "react-toastify";
import Select from "react-select";
import Image from "next/image";
import axios from "axios";

const AddItem = ({ setShowModal, selectItem, setSelectItem, itemList }) => {
  const [extraItemList, setExtraItemList] = useState([]);
  const [extraItem, setExtraItem] = useState({
    name: "",
    price: 0,
  });
  const [imageUrl, setImageUrl] = useState("");

  const [itemDetails, setItemDetails] = useState({
    name: "",
    description: "",
    basePrice: 0,
    small: 0,
    medium: 0,
    large: 0,
  });

  const uploadImage = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "streed");
    fetch("https://api.cloudinary.com/v1_1/streed/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImageUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const addExtraItem = (data) => {
    // console.log(data);
    if (data.name && data.price) {
      setExtraItemList((prev) => [...prev, data]);
      setExtraItem({
        name: "",
        price: "",
      });
    } else {
      toast.error("Something is wrong.");
    }
  };

  const deleteExtraItem = (data) => {
    setExtraItemList(extraItemList.filter((item) => item.name !== data));
  };

  const addHandle = () => {
    axios
      .post(
        `/api/menu-items`,
        {
          image: imageUrl,
          name: itemDetails?.name,
          description: itemDetails?.description,
          category: selectItem?.value,
          basePrice: itemDetails?.basePrice,
          sizes: [
            { name: "small", price: itemDetails?.small },
            { name: "middle", price: itemDetails?.medium },
            { name: "large", price: itemDetails?.large },
          ],
          extraIngredientPrices: extraItemList,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) =>
        setItemDetails({
          name: "",
          description: "",
          basePrice: 0,
          small: 0,
          medium: 0,
          large: 0,
        })
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="  bg-black bg-opacity-70 flex justify-center items-center h-full w-full z-50 top-0 left-0 fixed">
      <OutsideClickHandler onOutsideClick={() => setShowModal(false)}>
        <h2 className=" text-primary text-center rounded-tr-md rounded-tl-md text-4xl font-bold bg-slate-300">
          Add items
        </h2>
        <div className=" flex  gap-10 bg-slate-400 justify-center py-4  h-[600px] overflow-y-auto p-8 ">
          <div className=" w-1/2">
            <div className=" flex justify-between items-center gap-2">
              <div className=" relative overflow-auto border-dotted border-2 h-[150px] w-[150px] rounded-md">
                <Image src={imageUrl || "/google.jpeg"} alt="" layout="fill" />
              </div>
              <label
                htmlFor="inputImg"
                className="bg-primary text-white font-bold px-6 py-2 rounded-xl"
              >
                <input
                  id="inputImg"
                  type="file"
                  className="hidden"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => uploadImage(e.target.files[0])}
                />
                Select Image
              </label>
            </div>
            <div className=" py-4">
              <Select
                value={selectItem}
                onChange={(data) => {
                  setSelectItem(data);
                }}
                options={itemList}
              />
            </div>

            <div className="flex gap-2 flex-col">
              <p className="  text-slate-500 py-[2px]">Name:</p>
              <input
                type="text"
                placeholder="Name"
                value={itemDetails.name}
                onChange={(e) =>
                  setItemDetails({ ...itemDetails, name: e.target.value })
                }
                required
                className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
              />
            </div>
            <div className="flex gap-2 flex-col ">
              <p className="  text-slate-500 py-[2px]">Description:</p>
              <textarea
                placeholder="Description"
                value={itemDetails.description}
                onChange={(e) =>
                  setItemDetails({
                    ...itemDetails,
                    description: e.target.value,
                  })
                }
                required
                className=" bg-slate-200 h-[150px] border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
              />
            </div>
            <div className="flex gap-2 flex-col ">
              <p className="  text-slate-500 py-[2px]">Base Price:</p>
              <input
                type="number"
                placeholder="Base price"
                value={itemDetails.basePrice}
                onChange={(e) =>
                  setItemDetails({ ...itemDetails, basePrice: e.target.value })
                }
                required
                className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
              />
            </div>
          </div>

          <div>
            <p className="  text-slate-500 py-[2px] text-center">Sizes:</p>
            <div className="flex gap-2 flex-col ">
              <p className="  text-slate-500 py-[2px]">Small:</p>
              <input
                type="number"
                placeholder="Enter price"
                value={itemDetails.small}
                onChange={(e) =>
                  setItemDetails({ ...itemDetails, small: e.target.value })
                }
                required
                className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
              />
            </div>
            <div className="flex gap-2 flex-col ">
              <p className="  text-slate-500 py-[2px]">Medium:</p>
              <input
                type="number"
                placeholder="Enter price"
                value={itemDetails.medium}
                onChange={(e) =>
                  setItemDetails({ ...itemDetails, medium: e.target.value })
                }
                required
                className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
              />
            </div>
            <div className="flex gap-2 flex-col ">
              <p className="  text-slate-500 py-[2px]">Large:</p>
              <input
                type="number"
                placeholder="Enter price"
                value={itemDetails.large}
                onChange={(e) =>
                  setItemDetails({ ...itemDetails, large: e.target.value })
                }
                required
                className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
              />
            </div>

            <p className="  text-slate-500 py-[2px] text-center mt-4">
              Extra Ingredients:
            </p>
            <div>
              <div className="flex gap-2 item-center ">
                <input
                  type="text"
                  placeholder="Enter name"
                  value={extraItem.name}
                  onChange={(e) =>
                    setExtraItem({ ...extraItem, name: e.target.value })
                  }
                  required
                  className=" bg-slate-200 border-[1px] px-2 py-2 font-bold shadow-black text-gray-500 rounded-md outline-none"
                />

                <input
                  type="number"
                  placeholder="Enter price"
                  value={extraItem.price}
                  onChange={(e) =>
                    setExtraItem({ ...extraItem, price: e.target.value })
                  }
                  required
                  className=" bg-slate-200 border-[1px] px-2 py-2 font-bold shadow-black text-gray-500 rounded-md outline-none"
                />
                <button
                  className=" bg-primary py-1 px-2 text-slate-300 rounded-md"
                  onClick={() => addExtraItem(extraItem)}
                >
                  Add
                </button>
              </div>
              <p className="py-2 text-black font-bold">Added Ingredients:</p>
              <div className=" flex flex-wrap gap-2">
                {extraItemList?.map((item, index) => (
                  <div key={index} className="flex items-center gap-[4px]">
                    <p>
                      {index + 1}. {item.name} (${item.price})
                    </p>
                    <div onClick={() => deleteExtraItem(item.name)}>
                      <DeleteButton />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-2 bg-slate-300  py-2 rounded-br-md rounded-bl-md ">
          <div
            onClick={() => addHandle()}
            className=" bg-primary text-white font-bold px-6 py-2 rounded-xl cursor-pointer"
          >
            Add
          </div>
          <div
            onClick={() => setShowModal(false)}
            className="bg-primary text-white font-bold px-6 py-2 rounded-xl cursor-pointer"
          >
            Close
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddItem;
