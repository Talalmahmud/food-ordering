import React from "react";
import UserTab from "../ui/UserTab";

const Categories = () => {
  return (
    <div>
      <div className=" flex mt-8 flex-col justify-center items-center">
        <UserTab admin={true} />
      </div>
    </div>
  );
};

export default Categories;
