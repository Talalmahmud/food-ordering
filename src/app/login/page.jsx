"use client";

import Image from "next/image";
import React, { useState } from "react";
import EyeOn from "../icons/EyeOn";
import EyeOff from "../icons/EyeOff";
import axios from "axios";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", { email, password });
  };
  return (
    <div className=" flex flex-col justify-center items-center mx-auto">
      <h1 className=" text-primary font-bold text-4xl">Login</h1>
      {showError && <p>Your login is not successful. Try again!</p>}
      {showSuccess && <p>Your login is successful.</p>}
      <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
        />
        <label className="relative" htmlFor="pass">
          <input
            id="pass"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
          />
          {showPassword ? (
            <div
              className=" absolute right-2 top-2 cursor-pointer z-10"
              onClick={() => setShowPassword(false)}
            >
              <EyeOn />
            </div>
          ) : (
            <div
              className=" absolute right-2 top-2 cursor-pointer z-10"
              onClick={() => setShowPassword(true)}
            >
              <EyeOff />
            </div>
          )}
        </label>

        <button
          type="submit"
          className=" bg-primary text-white font-bold px-6 py-2 rounded-xl"
        >
          Login
        </button>
      </form>

      <div className=" flex flex-col gap-y-4 w-[350px] mt-4">
        <p className="text-center">or login credentials provider</p>
        <div
          className="flex justify-center items-center gap-4 text-slate-500 border-[1px] border-black font-bold px-6 py-2 rounded-xl"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <button
            className=" relative h-6 w-6"
            onClick={() => signIn("google")}
          >
            <Image
              src={
                "https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"
              }
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </button>
          <span> Login with google</span>
        </div>

        <p className=" text-center">
          Don&apos;t have an account?{" "}
          <Link
            href={"/register"}
            className=" text-primary font-bold underline cursor-pointer"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
