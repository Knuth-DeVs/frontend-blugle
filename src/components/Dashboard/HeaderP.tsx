import { Badge } from "@mui/material";
import React from "react";
import { IoNotifications } from "react-icons/io5";



const HeaderP: React.FC = () => {
  

  return (
    <div className="border-b-2 w-full flex items-center justify-between my-2 px-2 md:px-5">
      <div className="flex flex-col ">
        <p className="text-gray-400">Hi, Steve Addo</p>
        <p className="font-bold text-3xl">Welcome Back</p>
      </div>
      <div className="flex items-center gap-0">
        <Badge badgeContent={4} variant="dot" color="error" className="cursor-pointer">
          <IoNotifications className="text-2xl" />
        </Badge>
      </div>
    </div>
  );
};

export default HeaderP;
