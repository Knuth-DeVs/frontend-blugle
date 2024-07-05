import React from 'react'
import Cartoon from '../../assets/cartoon.png'
import { Link } from 'react-router-dom'

const LoginDisplay: React.FC = () => {
  return (
    <div className='bg-[rgb(49,111,246)] h-[100vh] w-[550px] rounded-tr-3xl rounded-br-3xl'>
      <Link to='/'>Home</Link>
        <div className='text-center pt-2'>
            <h2 className='text-3xl font-bold text-white'>LOGIN</h2>
            <h2 className='text-lg text-white'>Please enter your details</h2>
        </div>
        <div className='flex flex-row '>
            <h1 className='text-5xl font-bold text-white pl-6 mt-16'>Our Patients are the center of everything we do.</h1>
            <img src={Cartoon} alt="" className='w-[400px] mt-16 ml-8'/>
        </div>

    </div>
  )
}

export default LoginDisplay