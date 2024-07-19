import  { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import logo from '../../assets/logo.png'
import { BiArrowBack } from "react-icons/bi";

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')


  const handleLogin = async ()=>{
    const sendDetails = await axios.post("localhost:5000//api/login", {email, pwd})
    try {
      if (sendDetails.status === 200){
        console.log("You have signed in successfully")
      }
      else{
        console.log("There was an error signining you in")
      }
    } catch (error) {
      console.error("An error occurred")
    }
    }
    


  return (
    <div>
      <div className=' h-[100vh] lg:pr-36 mt-10 md:mt-24 mx-6'>
          <div  className="w-full px-auto">
            <Link to='/'>
              <BiArrowBack className='text-2xl text-blue-600 cursor-pointer lg:hidden' />
            </Link>
            <img src={logo} className='lg:hidden'/>
              <h2 className='md:text-xl uppercase '>Start your Journey</h2>
              <p className='md:text-5xl font-bold pt-4 text-2xl'>Sign In To <span className='text-blue-500'>Blugle.</span></p>
              <p className='text-gray-800 py-2'>Don't have an account?<span className='text-blue-500 pl-2'><Link to='/signup'>Sign Up</Link></span></p>
          </div>
          <form action ="localhost:5000">
            <div>
            <div className='mt-7 mb-4'>
              <label className=''>Email</label><br/>
              <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border px-2 py-3 w-full outline-none rounded-lg' />
            </div>
            <div>
              <label className=''>Password</label><br />
              <input type='password' placeholder='Password' value={pwd} onChange={(e) => setPwd(e.target.value)} className='border px-2 py-3 w-full outline-none rounded-lg'/>
            </div>
            <Link to="/doctor">
            <div className='bg-navlinks py-2 px-3 mt-8 rounded-md text-center text-white cursor-pointer hover:scale-105 duration-300 ease-linear'>
              <button onClick = {handleLogin}>SIGN IN</button>
            </div>
            </Link>
            </div>
          </form> 
          <p className='pt-3 text-blue-500 cursor-pointer text-right '>Forgot your password?</p>
      </div>
      
    </div>
  )
}

export default LoginForm