"use client";

import Image from "next/image";
import React from "react";
import Right from "../icons/Right";
import More from "../icons/More";

const Hero = () => {
  return (
    <>
      <div className=" grid grid-cols-2 py-12 ">
        <div className=" ">
          <h1 className=" text-8xl font-semibold ">
            Everything is better with a{" "}
            <span className=" text-primary ">Pizza</span>.
          </h1>
          <p className=" my-8 text-[16px] text-slate-600">
            Fresh food is good for health. Take a pizza to start your day.Enjoy
            your colorful day. Happy your day journey. Enjoy your day.
          </p>
          <div className=" flex item-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-primary hover:shadow-md hover:text-slate-300 rounded-full">
              Order now
              <Right />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 shadow-md hover:bg-primary hover:text-slate-200  rounded-full">
              Learn more
              <More />
            </button>
          </div>
        </div>
        <div className="relative ">
          <Image
            src={
              "https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-13.png"
            }
            layout="fill"
            alt="pizza"
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
