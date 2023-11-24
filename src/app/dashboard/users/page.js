"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const getUser = async () => {
    await axios
      .get("/api/user")
      .then((res) => setUserList(res.data))
      .catch((error) => toast.error(error));
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(userList);
  return (
    <div>
      {userList?.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
