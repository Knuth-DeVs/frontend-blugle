import React from 'react'
import Cartoon from '../../assets/cartton2.png'

const SignupDisplay = () => {
  return (
    <div className='bg-[rgb(49,111,246)] h-[100vh] w-[550px] rounded-tl-3xl rounded-bl-3xl'>
        <div className='text-center pt-6'>
            <h2 className='text-3xl font-bold text-white'>SIGN UP</h2>
            <h2 className='text-lg text-white'>Please provide your credentials</h2>
        </div>
        <div className='flex flex-col '>
            <h1 className='text-2xl font-bold text-white pl-6 mt-2 text-center'>Exceptional healthcare close to you.</h1>
            <img src={Cartoon} alt="" className='w-[450px] mt-12 -ml-32'/>
        </div>

    </div>
  )
}

export default SignupDisplay