import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import logo from '../../assets/logo.png'



const SignUpForm: React.FC = () => {
  return (
    <div className='md:h-[100vh]'>
      <Link to='/'>
        <BiArrowBack className='text-2xl text-blue-600 cursor-pointer lg:hidden m-3' />
      </Link>
      <img src={logo} className='lg:hidden'/>
      <div className='w-full mx-4 sm:mx-16 lg:pl-10 md:mt-6  mt-3'>
          <div>
              <h2 className='text-lg md:text-xl uppercase '>REGISTER</h2>
              <p className='text-4xl md:text-5xl font-bold pt-2'>Sign Up For Free</p>
              <p className='text-gray-800 py-2 text-sm md:text-lg'>Already have an account?<span className='text-blue-500 pl-2'><Link to='/login'>Sign In</Link></span></p>
          </div>
          <form>
            <div className='w-[330px] sm:w-[600px] lg:w-[400px]'>
            <div className='mt-2 mb-2'>
              <label className=''>Full Name</label><br/>
              <input type='text' placeholder='Full name' className='border px-2 py-3 w-full outline-none rounded-lg' />
            </div>
            <div>
              <label className=''>Email</label><br />
              <input type='email' placeholder='Email' className='border px-2 py-3 w-full outline-none rounded-lg'/>
            </div>
            <div className='mt-2 mb-4'>
              <label className=''>Phone Number</label><br/>
              <input type='number' pattern='[0-9]+' placeholder='Phone Number' className='border px-2 py-3 w-full outline-none rounded-lg' />
            </div>
            <div>
              <label className=''>Password</label><br />
              <input type='password' placeholder='Password' className='border px-2 py-3 w-full outline-none rounded-lg'/>
            </div>
            <div className='bg-navlinks py-2 px-3 mt-8 rounded-md text-center text-white cursor-pointer hover:scale-105 duration-300 ease-linear'>
              SIGN UP
            </div>
            </div>
          </form> 
      </div>
          <p className='pt-3 cursor-pointer text-center lg:pl-20 font-semibold px-2'>By submitting your information,you agree to our <span className='text-navlinkshover'>Privacy Policy</span> and <span className='text-navlinkshover'>Terms of use</span></p>
    </div>
  )
}

export default SignUpForm