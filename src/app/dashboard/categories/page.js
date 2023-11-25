"use client";

import DeleteButton from "@/app/icons/DeleteButton";
import EditIcon from "@/app/icons/EditIcon";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Categories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const updateCategory = async (itemName, id) => {
    await axios
      .put(
        "/api/category",
        {
          name: itemName,
          _id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => toast.success("category is added"))
      .catch((error) => toast.error("category not add"));
  };

  const getCategories = async () => {
    await axios
      .get("/api/category")
      .then((res) => setCategoryList(res.data))
      .catch((error) => toast.error(error));
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete("/api/category?_id=" + id);
      toast.success("Category deleted");
      getCategories();
    } catch (error) {
      toast.error("Category not deleted");
    }
  };

  const handleSubmit = async () => {
    await axios
      .post(
        "/api/category",
        {
          name: categoryName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        getCategories();
        toast.success("Always at the bottom", {
          position: "bottom-center",
        });
        toast.success("category is added");
      })
      .catch((error) => toast.error("category not add"));
  };

  useEffect(() => {
    getCategories();
  }, []);

  // console.log(categoryList);

  return (
    <div className="h-[100vh]">
      <div className=" flex mt-8 flex-col justify-center ">
        <p className=" w-auto text-slate-500 py-[2px]">Category Name:</p>
        <div className="flex justify-center items-center gap-x-4 ">
          <div>
            <input
              type="text"
              placeholder="Type category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              autoFocus
              required
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
              className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
            />
          </div>
          <div>
            <button
              className="bg-primary text-white font-bold px-6 py-2 rounded-xl"
              onClick={() => handleSubmit()}
            >
              Add Category
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className=" underline">List of categories:</p>
        {categoryList.length > 0 &&
          categoryList?.map((item, index) => (
            <div className="flex items-center gap-1" key={index}>
              <p>{index + 1} .</p>
              <p>{item.name}</p>

              <div onClick={() => updateCategory(item._id)}>
                <EditIcon />
              </div>
              <div onClick={() => deleteCategory(item._id)}>
                <DeleteButton />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
