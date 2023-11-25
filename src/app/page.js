"use client";

import Image from "next/image";
import Hero from "./ui/Hero";
import Card from "./ui/Card";
import MenuItems from "./ui/MenuItems";
import HomeMenu from "./ui/HomeMenu";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  console.log("env:", process.env.NEXTAUTH_URL);
  return (
    <div className=" h-full w-full  ">
      <Hero />

      <HomeMenu />
      <MenuItems />
    </div>
  );
}
