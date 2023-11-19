"use client";

import Image from "next/image";
import React, { useState } from "react";
import EyeOn from "../icons/EyeOn";
import EyeOff from "../icons/EyeOff";
import axios from "axios";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetchData = await axios.post(
      "/api/register",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (fetchData) {
      console.log("Add successful");
      setShowLogin(true);
      setEmail("");
      setPassword("");
      setShowSuccess(true);
    } else {
      console.log("Not add successful");
      setShowError(true);
    }

    // await fetch("/api/register", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: { "Content-Type": "application/json" },
    // }).then(()=> setShowLogin(true))
    // .catch((error)=> setSHowError(true));
    // ;
  };
  return (
    <div className=" flex flex-col justify-center items-center mx-auto">
      <h1 className=" text-primary font-bold text-4xl">Register</h1>
      {showError && <p>Your login is not successful. Try again!</p>}
      {showSuccess && (
        <p>
          Your login is successful.{" "}
          <span
            className=" text-primary font-bold underline"
            onClick={() => setShowLogin(true)}
          >
            Login now
          </span>
          !
        </p>
      )}
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

        {showLogin ? (
          <button className=" bg-primary text-white font-bold px-6 py-2 rounded-xl">
            Login
          </button>
        ) : (
          <button className=" bg-primary text-white font-bold px-6 py-2 rounded-xl">
            Register
          </button>
        )}

        <p className="text-center">or login credentials provider</p>
        <button className="flex justify-center items-center gap-4 text-slate-500 border-[1px] border-black font-bold px-6 py-2 rounded-xl">
          <div className=" relative h-6 w-6">
            <Image
              src={
                "https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"
              }
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p> Login with google</p>
        </button>

        <p className=" text-center">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className=" text-primary font-bold underline cursor-pointer"
          >
            Login now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
