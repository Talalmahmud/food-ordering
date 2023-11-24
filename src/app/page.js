"use client";

import Image from "next/image";
import Hero from "./ui/Hero";
import Card from "./ui/Card";
import MenuItems from "./ui/MenuItems";
import HomeMenu from "./ui/HomeMenu";
import "react-toastify/dist/ReactToastify.css";

import * as dotenv from "dotenv";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
dotenv.config();

export default function Home() {
  return (
    <div className=" h-full w-full  ">
      <Hero />

      <HomeMenu />
      <MenuItems />
    </div>
  );
}
