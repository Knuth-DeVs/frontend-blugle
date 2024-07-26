import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { TbLayoutDashboardFilled } from 'react-icons/tb';
import { FaBookMedical } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { AiFillMessage } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { FaSackDollar } from 'react-icons/fa6';

const Sidebar = () => {
    const [extend, setExtend] = useState(false);

    return (
        <div className='bg-navlinks min-h-[100vh] flex flex-col justify-between px-[5px] py-[15px]'>
            <div className='flex flex-row'>
                <IoMenu onClick={() => setExtend(prev => !prev)} className='text-white text-3xl font-bold cursor-pointer hidden md:block' />
            </div>
            <div className='flex flex-col items-center justify-between -mt-32'>
                <div className='text-white flex flex-col gap-2'>
                    <NavLink
                        to="/patient/dashboard"
                        className={({ isActive }) =>
                            `px-2 py-2 rounded-md text-navlinks cursor-pointer flex items-center gap-2 ${isActive ? 'bg-navlinks text-white' : 'bg-white'}`
                        }
                    >
                        <TbLayoutDashboardFilled />
                        {extend ? <p className='hidden md:block'>Dashboard</p> : null}
                    </NavLink>
                    <NavLink
                        to="/patient/appointment"
                        className={({ isActive }) =>
                            `px-2 py-2 rounded-md text-navlinks cursor-pointer flex items-center gap-2 ${isActive ? 'bg-navlinks text-white' : 'bg-white'}`
                        }
                    >
                        <FaBookMedical />
                        {extend ? <p className='hidden md:block'>Appointments</p> : null}
                    </NavLink>
                    <NavLink
                        to="/patient/doctors"
                        className={({ isActive }) =>
                            `px-2 py-2 rounded-md text-navlinks cursor-pointer flex items-center gap-2 ${isActive ? 'bg-navlinks text-white' : 'bg-white'}`
                        }
                    >
                        <GrUserManager />
                        {extend ? <p className='hidden md:block'>Patients</p> : null}
                    </NavLink>
                    <NavLink
                        to="/patient/notifications"
                        className={({ isActive }) =>
                            `px-2 py-2 rounded-md text-navlinks cursor-pointer flex items-center gap-2 ${isActive ? 'bg-navlinks text-white' : 'bg-white'}`
                        }
                    >
                        <AiFillMessage />
                        {extend ? <p className='hidden md:block'>Notifications</p> : null}
                    </NavLink>
                    <NavLink
                        to="/patient/payment"
                        className={({ isActive }) =>
                            `px-2 py-2 rounded-md text-navlinks cursor-pointer flex items-center gap-2 ${isActive ? 'bg-navlinks text-white' : 'bg-white'}`
                        }
                    >
                        <FaSackDollar />
                        {extend ? <p className='hidden md:block'>Payments</p> : null}
                    </NavLink>
                    <NavLink
                        to="/patient/profile"
                        className={({ isActive }) =>
                            `px-2 py-2 rounded-md text-navlinks cursor-pointer flex items-center gap-2 ${isActive ? 'bg-navlinks text-white' : 'bg-white'}`
                        }
                    >
                        <CgProfile />
                        {extend ? <p className='hidden md:block'>Profile</p> : null}
                    </NavLink>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        `px-2 py-2 rounded-md text-navlinks cursor-pointer flex items-center gap-2 ${isActive ? 'bg-navlinks text-white' : 'bg-white'}`
                    }
                >
                    <BiLogOut />
                    {extend ? <p className='hidden md:block'>Log Out</p> : null}
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
