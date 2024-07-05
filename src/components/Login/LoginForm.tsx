import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm: React.FC = () => {
  return (
    <div>
      <div className=' h-[100vh] pr-8 lg:pr-36 mt-24'>
          <div>
              <h2 className='text-xl uppercase '>Start your Journey</h2>
              <p className='text-5xl font-bold pt-4'>Sign In To <span className='text-blue-500'>Blugle.</span></p>
              <p className='text-gray-800 py-2'>Don't have an account?<span className='text-blue-500 pl-2'><Link to='/signup'>Sign Up</Link></span></p>
          </div>
          <form>
            <div className='mt-7 mb-4'>
              <label className=''>Email</label><br/>
              <input type='text' placeholder='Email' className='border px-2 py-3 w-[430px] outline-none rounded-lg' />
            </div>
            <div>
              <label className=''>Password</label><br />
              <input type='password' placeholder='Password' className='border px-2 py-3 w-[430px] outline-none rounded-lg'/>
            </div>
            <div className='bg-navlinks py-2 px-3 mt-8 rounded-md text-center text-white cursor-pointer hover:scale-105 duration-300 ease-linear'>
              SIGN IN
            </div>
          </form> 
          <p className='pt-3 text-blue-500 cursor-pointer text-right '>Forgot your password?</p>
      </div>
    </div>
  )
}

export default LoginForm