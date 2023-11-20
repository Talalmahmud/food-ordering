"use client";

import Image from "next/image";
import Hero from "./ui/Hero";
import Card from "./ui/Card";
import MenuItems from "./ui/MenuItems";
import HomeMenu from "./ui/HomeMenu";

export default function Home() {
  console.log(process.env.MONGO_URL);
  return (
    <div className="  ">
      <Hero />

      <HomeMenu />
      <MenuItems />
    </div>
  );
}