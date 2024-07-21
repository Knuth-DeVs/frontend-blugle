import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { TbLayoutDashboardFilled } from 'react-icons/tb';
import { FaBookMedical } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { AiFillMessage } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FaSackDollar } from 'react-icons/fa6';


const Sidebar = () => {
    const [extend, setExtend] = useState(false)


  return (
    <div className='bg-navlinks min-h-[100vh] flex flex-col justify-between px-[5px] py-[15px]'>
      <div className='flex flex-row'>
        <IoMenu onClick={() => setExtend(prev=>!prev)}  className='text-white text-3xl font-bold cursor-pointer hidden md:block'/>
      </div>   
        <div className='flex flex-col items-center justify-between -mt-32'>
          <div className='text-white flex flex-col gap-2'>
            <Link to="/doctor/dashboard">
              <div className="bg-white px-2 py-2 rounded-md text-navlinks active:bg-navlinks active:text-white cursor-pointer flex items-center gap-2">
                  <TbLayoutDashboardFilled />
                  {extend ?<p className='hidden md:block'>Dashboard</p> : null}
              </div>
            </Link>
            <Link to="/doctor/appointment">
              <div className="bg-white px-2 py-2 rounded-md text-navlinks active:bg-navlinks active:text-white cursor-pointer flex items-center gap-2">
                <FaBookMedical />
                {extend ? <p className='hidden md:block'>Appointments</p> : null}
              </div>
            </Link>
            <Link to="/doctor/patients">
              <div className="bg-white px-2 py-2 rounded-md text-navlinks active:bg-navlinks active:text-white cursor-pointer flex items-center gap-2">
                <GrUserManager />
                {extend ? <p className='hidden md:block'>Patients</p> : null}
              </div>
            </Link>
            <Link to="/doctor/messages">
              <div className="bg-white px-2 py-2 rounded-md text-navlinks active:bg-navlinks active:text-white cursor-pointer flex items-center gap-2">
                <AiFillMessage />
                {extend ? <p className='hidden md:block'>Messages</p> : null}
              </div>
            </Link>
            <Link to="/doctor/schedule">
              <div className="bg-white px-2 py-2 rounded-md text-navlinks active:bg-navlinks active:text-white cursor-pointer flex items-center gap-2">
                <FaSackDollar />
                {extend ? <p className='hidden md:block'>Payments</p> : null}
              </div>
            </Link>
            <Link to="/doctor/profile">
              <div className="bg-white px-2 py-2 rounded-md text-navlinks active:bg-navlinks active:text-white cursor-pointer flex items-center gap-2">
                <CgProfile />
                {extend ? <p className='hidden md:block'>Profile</p> : null}
              </div>
            </Link>
          </div>
          </div>
          <div className='flex flex-col items-center gap-2'>
              <Link to="/login">
                <div className="bg-white px-2 py-2 rounded-md text-navlinks active:bg-navlinks active:text-white cursor-pointer flex items-center gap-2">
                  <BiLogOut />
                  {extend ? <p className='hidden md:block'>Log Out</p> : null}
                </div>
              </Link>
          </div>
        
    </div>
  )
}

export default Sidebar