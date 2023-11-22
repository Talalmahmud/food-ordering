import React from "react";
import UserTab from "../ui/UserTab";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <UserTab admin={isAdmin} />
      {children}
    </div>
  );
};

export default DashboardLayout;
