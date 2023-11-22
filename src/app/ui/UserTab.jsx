"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const UserTab = ({ admin }) => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <div className=" flex items-center gap-4">
        <Link
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            path === "/profile"
              ? "bg-primary text-white"
              : "text-black bg-slate-300 hover:shadow-md hover:text-slate-600"
          }`}
          href="/profile"
        >
          Profile
        </Link>
        {admin && (
          <>
            <Link
              className={`flex items-center gap-2 px-4 py-2 text-black bg-slate-300 hover:shadow-md hover:text-slate-600 rounded-full ${
                path === "/categories"
                  ? "bg-primary text-white"
                  : "text-black bg-slate-300 hover:shadow-md hover:text-slate-600"
              }`}
              href="/categories"
            >
              Categories
            </Link>
            <Link
              className={`flex items-center gap-2 px-4 py-2 text-black bg-slate-300 hover:shadow-md hover:text-slate-600 rounded-full ${
                path === "/menu-items"
                  ? "bg-primary text-white"
                  : "text-black bg-slate-300 hover:shadow-md hover:text-slate-600"
              }`}
              href="/menu-items"
            >
              Menu items
            </Link>
            <Link
              className={`flex items-center gap-2 px-4 py-2 text-black bg-slate-300 hover:shadow-md hover:text-slate-600 rounded-full ${
                path === "/users"
                  ? "bg-primary text-white"
                  : "text-black bg-slate-300 hover:shadow-md hover:text-slate-600"
              }`}
              href="/users"
            >
              Users
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default UserTab;
