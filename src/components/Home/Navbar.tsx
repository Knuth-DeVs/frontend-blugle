import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState<string>('');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };


    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg w-full">
        <div className="mx-4 md:mx-10 relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center pt-3 flex-shrink-0">
                    <img src={logo} alt="Logo" className='w-44' />
                </div>
                <ul className=" hidden lg:flex gap-8 font-normal text-navlinks text-xl">
                  <Link to='/' onClick={() => handleLinkClick('Home')}>
                    <li className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'Home'? 'underline text-navlinkshover' : ''}`}>Home</li>
                  </Link>
                  <Link to='/about' onClick={() => handleLinkClick('About')}>
                    <li className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'About'? 'underline text-navlinkshover' : ''}`}>About Us</li>
                  </Link>
                  <Link to='/contact' onClick={() => handleLinkClick('Company')}>
                    <li className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'Company'? 'underline text-navlinkshover' : ''}`}>Contact Us</li>
                  </Link>
                  <Link to='/service'>
                    <li onClick={() => handleLinkClick('Services')} className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'FAQ'? 'underline text-navlinkshover' : ''}`}>Services</li>
                  </Link>
                </ul>
                <ul className="hidden lg:flex font-medium text-navlinkshover gap-8 text-xl">
                  <li className='cursor-pointer duration-300 ease-linear'><Link to="/login">Login</Link></li>
                  <li className='cursor-pointer duration-300 ease-linear'><Link to="/signup">Sign Up</Link></li>
                </ul>
                <div className="lg:hidden md:flex md:flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <AiOutlineClose className='text-4xl font-bold' /> : <CgMenu className='text-4xl font-bold' />}

                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed transform -translate-x-[5%] transition-all duration-300 ease-linear left-0 z-20 w-3/4 h-[90vh] p-12 flex flex-col justify-center items-center lg:hidden bg-white">
                    <ul className='font-semibold text-lg'>
                        <li className=' hover:text-blue-500 duration-300 ease-in py-3 text-center'><Link to="/">Home</Link></li> <hr className='w-60'/>
                        <li className=' hover:text-blue-500 duration-300 ease-in py-3 text-center'><Link to="/about">About Us</Link></li> <hr className='w-60'/>
                        <li className=' hover:text-blue-500 duration-300 ease-in py-3 text-center'><Link to="/contact">Contact Us</Link></li> <hr className='w-60'/>
                        <li className=' hover:text-blue-500 duration-300 ease-in py-3 text-center'><Link to="/service">Service</Link></li> <hr className='w-60'/>
                    </ul>
                    <ul className="flex flex-row items-center font-medium text-navlinkshover gap-8 text-xl pt-6">
                      <li className='cursor-pointer duration-300 ease-linear hover:bg-blue-400 border border-blue-400 px-3 py-1 rounded-xl hover:text-white '><Link to="/login">Login</Link></li>
                      <li className='cursor-pointer duration-300 ease-linear bg-blue-400 border hover:bg-white hover:border-blue-400 px-3 py-1 rounded-xl text-white hover:text-black'><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar