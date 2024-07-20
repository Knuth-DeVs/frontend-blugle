import { Avatar, Badge } from "@mui/material"
import { IoMdSearch } from "react-icons/io"
import { IoNotifications } from "react-icons/io5"

const Header = () => {
    return(
        <div className="border-b-2 w-full flex items-center justify-between my-2 px-2 md:px-5">
            <div className="border rounded-xl px-2 py-2 md:mx-6 mb-2 flex items-center gap-2">
                <IoMdSearch className="text-2xl text-gray-500"/>
                <input type="search" placeholder="Type to search" className="outline-none"/>
            </div>
            <div className="flex items-center gap-4">
                <Badge badgeContent={4} variant="dot" color="error" className="cursor-pointer">
                    <IoNotifications className="text-2xl"/>
                </Badge>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Avatar>H</Avatar>
                    <p className="font-semibold hidden md:block">Dr. Aric</p>
                </div>
            </div>
        </div>
    )
}

export default Header

