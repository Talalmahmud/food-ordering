"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const navigate = useRouter();
  useEffect(() => {
    navigate.push("/dashboard/profile");
  }, [navigate]);
  return (
    <div className=" flex justify-center items-center">
      Welcome to dashboard
    </div>
  );
};

export default Dashboard;
