import { Badge } from "@mui/material";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import Avatar from '@mui/material/Avatar';
import { useUser } from '../../context/UserContext'; // Import user context


const HeaderP: React.FC = () => {
  const { fullName } = useUser(); // Access user's full name

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div className="border-b-2 w-full flex items-center justify-between my-2 px-2 md:px-5">
      <div className="flex flex-col">
        <p className="text-gray-400">Hi, {fullName}</p>
        <p className="font-bold text-3xl">Welcome Back</p>
      </div>
      <div className="flex items-center gap-0">
        <Badge badgeContent={4} variant="dot" color="error" className="cursor-pointer">
          <IoNotifications className="text-2xl" />
        </Badge>
        <Avatar {...stringAvatar(fullName)} />
      </div>
    </div>
  );
};

export default HeaderP;
