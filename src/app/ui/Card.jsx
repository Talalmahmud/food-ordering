import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className=" bg-gray-200 hover:bg-white shadow-xl flex  cursor-pointer flex-col gap-2 items-center justify-center rounded p-2 transition-all">
      <div className=" relative overflow-auto h-[190px] w-full mb-2 ">
        <Image
          src="https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-13.png"
          alt="pizza"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <h1 className=" text-xl font-bold">pizza title</h1>
      <p className="text-sm text-center">
        It is very important for the customer to pay attention to the adipiscing
        process.
      </p>
      <button className=" text-white hover:bg-red-400  font-bold bg-primary rounded-full my-2  px-6  py-2 ">
        Add to cart $20
      </button>
    </div>
  );
};

export default Card;
