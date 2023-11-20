"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Profile = () => {
  const session = useSession();
  const userImg = session?.data?.user?.image;
  const [name, setName] = useState(session?.data?.user?.name);

  if (session.status === "unauthenticated") {
    redirect("/");
  }
  if (session.status === "loading") {
    return "Loading....";
  }

  const handleSubmit = async () => {
    await axios.put(
      "/api/profile",
      {
        name: name,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className=" ">
      <div className=" flex flex-col justify-center items-center mx-auto">
        <h1 className=" text-primary font-bold text-4xl">Profile</h1>
        <div className=" flex items-center gap-8 p-20">
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className=" relative h-[120px] w-[130px] rounded-md">
              <Image
                src={userImg}
                alt=""
                layout="fill"
                className=" rounded-[12px]"
              />
            </div>
            <button className="bg-primary text-white font-bold px-6 py-2 rounded-xl">
              edit
            </button>
          </div>
          <div className=" flex flex-col gap-6">
            <input
              type="name"
              placeholder="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="email"
              value={session?.data?.user?.email}
              disabled
              required
              className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
            />

            <button
              className="bg-primary text-white font-bold px-6 py-2 rounded-xl"
              onClick={() => handleSubmit()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
