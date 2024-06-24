import React from 'react'
import Form from './Form'
import Nurse from '../../assets/connect.png'

const FormSection = () => {
  return (
    <>
        <div className='w-full h-30 lg:h-56 bg-gradient-to-r from-[#70C0E6] to-navlinkshover mt-32'>
        <div className='flex flex-row items-center justify-between my-8 md:mx-10'>
            <div>
                <img src={Nurse} alt="Connect" className='w-[180px] md:w-[300px] md:-mt-32 -mt-16'/>
            </div>
            <div className='lg:w-[500px]'>
                <h1 className='text-2xl lg:text-5xl text-navlinkshover font-bold'>Connect</h1>
                <h1 className='text-2xl lg:text-5xl text-navlinkshover font-bold'>With</h1>
                <h1 className='text-2xl lg:text-5xl text-navlinkshover font-bold'>Us</h1>
                <p className='text-white max-md:text-sm'>See how Blugle delivers <br/> patient care</p>
            </div>
            <div className='flex flex-row-reverse items-center gap-2 lg:gap-8 xl:mr-32 mr-2'>
                <div className='bg-white px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-2xl md:text-xl text-navlinks font-semibold cursor-pointer'>
                    <p>Register</p>
                </div>
                <div className='bg-white px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-2xl md:text-xl text-navlinks font-semibold cursor-pointer'>
                    <p>Login</p>
                </div>
            </div>
        </div>
        </div>
    </>
    
  )
}

export default FormSection