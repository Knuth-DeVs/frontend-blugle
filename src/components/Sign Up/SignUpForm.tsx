import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import logo from '../../assets/logo.png';
import { useUser } from '../../context/UserContext';
import { CgSpinner } from 'react-icons/cg';

const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false)

  const { setFullName } = useUser();
  const navigate = useNavigate()

  const handleSignUp = () => {
    navigate('/doctor/dashboard')
    setFullName(name);
  };

  return (
    <div className='md:h-[100vh]'>
      <Link to='/'>
        <BiArrowBack className='text-2xl text-blue-600 cursor-pointer m-3' />
      </Link>
      <img src={logo} className='lg:hidden' />
      <div className='w-full mx-4 sm:mx-16 lg:pl-10 md:mt-6 mt-3'>
        <div>
          <h2 className='text-lg md:text-xl uppercase '>REGISTER</h2>
          <p className='text-4xl md:text-5xl font-bold pt-2'>Sign Up For Free</p>
          <p className='text-gray-800 py-2 text-sm md:text-lg'>Already have an account?<span className='text-blue-500 pl-2'><Link to='/login'>Sign In</Link></span></p>
        </div>
        <form>
          <div className='w-[330px] sm:w-[600px] lg:w-[400px]'>
            <div className='mt-2 mb-2'>
              <label>Full Name</label><br/>
              <input type='text' required placeholder='Full name' className='border px-2 py-3 w-full outline-none rounded-lg' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label>Email</label><br />
              <input type='email' required placeholder='Email' className='border px-2 py-3 w-full outline-none rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mt-2 mb-4'>
              <label>Phone Number</label><br/>
              <input type='number' required pattern='[0-9]+' placeholder='Phone Number' className='border px-2 py-3 w-full outline-none rounded-lg' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <label>Password</label><br />
              <input type='password' required placeholder='Password' className='border px-2 py-3 w-full outline-none rounded-lg' value={pwd} onChange={(e) => setPwd(e.target.value)}/>
            </div>
            <div onClick={handleSignUp}>
            <div onClick={()=> setLoading(true)} className='bg-navlinks flex items-center justify-center gap-2 py-2 px-3 mt-8 rounded-md text-center text-white cursor-pointer hover:scale-105 duration-300 ease-linear'>
            {loading &&
                  <CgSpinner size={30} className="animate-spin"/>}
              SIGN UP
            </div>
            </div>
          </div>
        </form>
      </div>
      <p className='pt-3 cursor-pointer text-center lg:pl-20 font-semibold px-2'>By submitting your information, you agree to our <span className='text-navlinkshover'>Privacy Policy</span> and <span className='text-navlinkshover'>Terms of use</span></p>
    </div>
  );
}

export default SignUpForm;
