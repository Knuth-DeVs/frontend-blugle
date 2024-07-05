import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <div className='mt-6 bg-navlinkshover w-full'>
        <div className='md:mx-32 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 mx-8'>
            <div className='pt-8 md:pt-16'>
                <h1 className='uppercase font-bold  text-3xl md:text-5xl text-white'>Blugle</h1>
                <p className='text-white text-xl md:text-2xl'>Exceptional Healthcare close to you</p>
            </div>
            <div className='text-white pt-6'>
                <h1 className='py-2 text-xl md:text-2xl'>Important Links</h1>
                <ul className='pt-2 md:text-xl'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About Us</li></Link>
                    <Link to='/contact'><li>Contact Us</li></Link>
                    <Link to='/service'><li>Services</li></Link>
                </ul>
            </div>
            <div className='text-white pt-6'>
                <h1 className='py-2 text-xl md:text-2xl'>Contact Us</h1>
                <ul className='pt-2 md:text-xl'>
                    <li>Phone: 123-456-7890</li>
                    <li>Email:  info@blugle.com</li>
                    <li>Address: 123 Main St, Anytown, USA</li>
                </ul>
            </div>

        </div>
        <hr className='py-2 mx-8 mt-4'/>
        <div className='text-left text-white pb-4 mx-8 md:mx-32'>
            <p>&copy; 2024 BLUGLE. All Rights Reserved by Knuth Devs</p>
        </div>
    </div>
  )
}

export default Footer