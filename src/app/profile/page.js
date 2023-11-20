"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Profile = () => {
  const session = useSession();

  if (session.status === "unauthenticated") {
    redirect("/");
  }
  if (session.status === "loading") {
    return "Loading....";
  }

  return (
    <div>
      <div className=" flex flex-col justify-center items-center mx-auto">
        <h1 className=" text-primary font-bold text-4xl">Profile</h1>
      </div>
    </div>
  );
};

export default Profile;
