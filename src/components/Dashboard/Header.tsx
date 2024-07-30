import React from "react";
import { Avatar, Badge, Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

interface Patient {
  name: string;
  location: string;
}

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  patients: Patient[];
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { fullName } = useUser();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

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
      <div className="border rounded-xl px-2 py-2 md:mx-6 mb-2 flex items-center gap-2">
        <IoMdSearch className="text-2xl text-gray-500" />
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search by name or location"
          className="outline-none"
        />
      </div>
      <div className="flex items-center gap-0">
        <Badge badgeContent={4} variant="dot" color="error" className="cursor-pointer">
          <IoNotifications className="text-2xl" />
        </Badge>
        <Box>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar {...stringAvatar(fullName || "User")} />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar {...stringAvatar(fullName || "User")} /> {fullName || "Profile"}
          </MenuItem>
          <Link to="/login">
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                {/* <Logout fontSize="small" /> */}
              </ListItemIcon>
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
