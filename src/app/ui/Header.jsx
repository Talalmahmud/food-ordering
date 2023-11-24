"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";
import CartIcon from "../icons/CartIcon";
import { UserContext } from "@/context/UserContext";
import toast from "react-hot-toast";

const Header = () => {
  const session = useSession();
  const userName = session?.data?.user?.name?.split(" ")[0];
  const { cartList } = useContext(UserContext);

  return (
    <>
      <header className=" sticky top-0 left-0 z-50 bg-white flex items-center justify-between border-b-2 py-2 w-full">
        <Link className=" text-primary text-2xl font-bold" href={"/"}>
          YoYo PIZZA
        </Link>
        <nav className=" flex items-center  gap-8 text-gray-500 font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <nav className=" flex items-center gap-2">
          <Link href={"/cart"} className=" px-6 py-2">
            <div className=" relative">
              <CartIcon />
              <p className=" absolute -top-3 -right-4 text-primary font-semibold">
                ({cartList?.length})
              </p>
            </div>
          </Link>
          {session.status === "authenticated" ? (
            <div className=" flex items-center gap-2">
              <Link
                href="/dashboard"
                className=" shadow-md rounded-full px-6 py-2 border-[1px] border-[#ddd]"
              >
                Hello, {userName}
              </Link>
              <button
                onClick={() => {
                  signOut();
                  toast.success("User logout successful.");
                }}
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
