import { Badge, Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import Avatar from '@mui/material/Avatar';
import { useUser } from '../../context/UserContext'; // Import user context
import { Link } from "react-router-dom";


const HeaderP: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { fullName } = useUser(); // Access user's full name

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

export default HeaderP;
