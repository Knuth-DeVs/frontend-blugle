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
                    
                    <li onClick={() => handleLinkClick('Company')} className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'Company'? 'underline text-navlinkshover' : ''}`}>Contact Us</li>
                    <li onClick={() => handleLinkClick('FAQ')} className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'FAQ'? 'underline text-navlinkshover' : ''}`}>FAQ's</li>
                </ul>
                <ul className="hidden lg:flex font-medium text-navlinkshover gap-8 text-xl">
                  <li className='cursor-pointer duration-300 ease-linear'>Login</li>
                  <li className='cursor-pointer duration-300 ease-linear'>Sign Up</li>
                </ul>
                <div className="lg:hidden md:flex md:flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <AiOutlineClose className='text-4xl font-bold' /> : <CgMenu className='text-4xl font-bold' />}

                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed left-0 z-20 w-3/4 h-[90vh] p-12 flex flex-col justify-center items-center lg:hidden bg-navlinks">
                    <ul className='font-semibold text-lg'>
                        <li className=' hover:text-blue-500 duration-300 ease-in py-3 text-center'><Link to="/">Home</Link></li> <hr className='w-60'/>
                        <li className=' hover:text-blue-500 duration-300 ease-in py-3 text-center'><Link to="/about">About Us</Link></li> <hr className='w-60'/>
                        <li className=' hover:text-blue-500 duration-300 ease-in py-3 text-center'><Link to="#about">Contact Us</Link></li> <hr className='w-60'/>
                        <li className=' hover:text-blue-500 duration-300 ease-in py-3 text-center'><Link to="#about">FAQ's</Link></li> <hr className='w-60'/>
                    </ul>
                    <ul className="flex flex-col lg:flex-row items-center font-medium text-navlinkshover gap-8 text-xl">
                      <li className='cursor-pointer duration-300 ease-linear'>Login</li>
                      <li className='cursor-pointer duration-300 ease-linear'>Sign Up</li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar