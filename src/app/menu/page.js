import React from "react";
import Card from "../ui/Card";

const Menu = () => {
  return (
    <div className=" py-4">
      <div className=" grid grid-flow-dense grid-cols-1 sm:grid-cols-2 px-4 md:grid-cols-3 justify-center items-center gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Menu;
