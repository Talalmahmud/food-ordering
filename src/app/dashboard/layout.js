"use client";
import React from "react";
import UserTab from "../ui/UserTab";
import { useSession } from "next-auth/react";

const DashboardLayout = ({ children }) => {
  const session = useSession();
  console.log(session);
  // const isAdmin = session.data.user.admin;
  return (
    <div className=" flex flex-col justify-center items-center py-2">
      <p className=" text-3xl text-primary font-bold pt-2">Dashboard</p>
      <div className=" w-full h-[1px] bg-slate-400 mt-1 mb-2"></div>
      <UserTab admin={true} />
      {children}
    </div>
  );
};

export default DashboardLayout;
