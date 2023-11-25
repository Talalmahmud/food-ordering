"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const UserTab = ({ admin }) => {
  const path = usePathname();
  // console.log(path);
  return (
    <div>
      <div className=" flex items-center gap-4">
        <Link
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            path === "/dashboard/profile"
              ? "bg-primary text-white"
              : "text-black bg-slate-300 hover:shadow-md hover:text-slate-600"
          }`}
          href="/dashboard/profile"
        >
          Profile
        </Link>
        {admin && (
          <>
            <Link
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                path === "/dashboard/categories"
                  ? "bg-primary text-white"
                  : "text-black bg-slate-300 hover:shadow-md hover:text-slate-600"
              }`}
              href="/dashboard/categories"
            >
              Categories
            </Link>
            <Link
              className={`flex items-center gap-2 px-4 py-2 hover:shadow-md rounded-full ${
                path === "/dashboard/menu-items"
                  ? "bg-primary text-white"
                  : "text-black bg-slate-300 hover:shadow-md hover:text-slate-600"
              }`}
              href="/dashboard/menu-items"
            >
              Menu items
            </Link>
            <Link
              className={`flex items-center gap-2 px-4 py-2 hover:shadow-md rounded-full ${
                path === "/dashboard/users"
                  ? "bg-primary text-white"
                  : "text-black bg-slate-300 hover:shadow-md hover:text-slate-600"
              }`}
              href="/dashboard/users"
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
