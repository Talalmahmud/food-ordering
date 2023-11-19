"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const session = useSession();
  console.log(session.status);

  return (
    <>
      <header className=" sticky top-0 left-0 z-50 bg-white flex items-center justify-between border-b-2 py-2 w-full">
        <Link className=" text-primary text-2xl font-bold" href={"/"}>
          YoYo PIZZA
        </Link>
        <nav className=" flex items-center  gap-8 text-gray-500 font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Menu</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </nav>
        <nav className=" flex items-center gap-2">
          {session.status === "authenticated" ? (
            <div className=" flex items-center gap-2">
              <Link href="/profile">Profile</Link>
              <button
                onClick={() => signOut()}
                className=" px-6 py-2 bg-primary text-white hover:shadow-md rounded-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className=" flex gap-2">
              <Link
                href={"/login"}
                className=" px-6 py-2 hover:bg-primary hover:text-white hover:shadow-md rounded-full"
              >
                Login
              </Link>

              <Link
                href={"/register"}
                className=" px-6 py-2 text-white bg-primary rounded-full"
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
