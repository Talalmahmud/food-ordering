"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const route = usePathname();

  return (
    <>
      {route === "/login" || route === "/register" ? (
        <div className=" py-16">
          <p className="text-center">&copy; 2023 All rights reserved.</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className=" uppercase text-2xl text-slate-400 ">Our Story</h1>
            <h2 className=" text-4xl text-primary italic font-bold">
              About us
            </h2>
            <div className=" p-4  w-[500px] text-center">
              <p className=" py-2">
                It is very important for the customer to pay attention to the
                adipiscing process. Selected as for they are burdened with
                duties to those with whom, here, the necessities of life are
                free to accept it less or to be able to bear it! Which, often.
              </p>
              <p className=" ">
                It is very important for the customer to pay attention to the
                adipiscing process. Selected as for they are burdened with
                duties to those with whom, here, the necessities of life are
                free to accept it less or to be able to bear it! Which, often.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className=" uppercase text-xl text-slate-400 ">
              Don&apos;t Hesitate
            </h1>
            <h2 className=" text-4xl text-primary italic font-bold">
              Contact us
            </h2>
            <div className=" p-4  w-[500px] text-center">
              <p className=" py-2 text-4xl">+880 1795257742</p>
              <p className=" py-2 text-4xl">+880 1795257742</p>
            </div>
          </div>
          <>
            <p className="text-center">&copy; 2023 All rights reserved.</p>
          </>
        </>
      )}
    </>
  );
};

export default Footer;
