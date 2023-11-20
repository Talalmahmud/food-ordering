"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
  const session = useSession();
  const userImg = session?.data?.user?.image;
  const [name, setName] = useState(session?.data?.user?.name);
  const [imageUrl, setImageUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const uploadImage = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "streed");
    fetch("https://api.cloudinary.com/v1_1/streed/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImageUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setName(session?.data?.user?.name);
  }, [session]);

  if (session.status === "unauthenticated") {
    redirect("/");
  }
  if (session.status === "loading") {
    return "Loading....";
  }

  const handleSubmit = async () => {
    await axios
      .put(
        "/api/profile",
        {
          name: name,
          url: imageUrl ? imageUrl : session?.data?.user?.image,
          street: street,
          address: address,
          city: city,
          postalCode: postalCode,
          country: country,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => setSuccess(true))
      .catch((error) => setSuccess(false));
  };

  return (
    <div className=" ">
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-primary font-bold text-4xl">Profile</h1>
        {success && (
          <div className=" border-[1px] border-green-400 rounded-md flex justify-center items-center text-[14px] p-2">
            Profile update successfully.
          </div>
        )}
        <div className=" flex items-start gap-8 p-20">
          <div className=" flex flex-col justify-center items-center gap-2">
            <div className=" relative h-[120px] w-[130px] rounded-md">
              <Image
                priority
                src={userImg}
                alt=""
                layout="fill"
                className=" rounded-[12px]"
              />
            </div>
            <label
              htmlFor="inputImg"
              className="bg-primary text-white font-bold px-6 py-2 rounded-xl"
            >
              <input
                id="inputImg"
                type="file"
                className="hidden"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => uploadImage(e.target.files[0])}
              />
              Edit
            </label>
            {/* <button className="bg-primary text-white font-bold px-6 py-2 rounded-xl">
              edit
            </button> */}
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
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Street address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className=" bg-slate-200 border-[1px] px-2 py-2 min-w-[350px] font-bold shadow-black text-gray-500 rounded-md outline-none"
            />

            <button
              className="bg-primary text-white font-bold px-6 py-2 rounded-xl"
              onClick={(e) => handleSubmit()}
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
