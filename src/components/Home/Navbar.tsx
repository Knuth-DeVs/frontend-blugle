import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState<string>('');

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg w-full">
        <div className="mx-10 relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center pt-3 flex-shrink-0">
                    <img src={logo} alt="Logo" className='w-44' />
                </div>
                <ul className="flex gap-8 font-normal text-navlinks text-xl">
                  <Link to='/'>
                    <li onClick={() => handleLinkClick('Home')} className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'Home'? 'underline text-navlinkshover' : ''}`}>Home</li>
                  </Link>
                  <Link to='/about'>
                    <li onClick={() => handleLinkClick('About')} className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'About'? 'underline text-navlinkshover' : ''}`}>About Us</li>
                  </Link>
                    
                    <li onClick={() => handleLinkClick('Company')} className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'Company'? 'underline text-navlinkshover' : ''}`}>Contact Us</li>
                    <li onClick={() => handleLinkClick('FAQ')} className={`cursor-pointer hover:text-navlinkshover duration-300 ease-linear ${selectedLink === 'FAQ'? 'underline text-navlinkshover' : ''}`}>FAQ's</li>
                </ul>
                <ul className="flex font-medium text-navlinkshover gap-8 text-xl">
                  <li className='cursor-pointer duration-300 ease-linear'>Login</li>
                  <li className='cursor-pointer duration-300 ease-linear'>Sign Up</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar