import React from 'react'
import Form from './Form'
import Nurse from '../../assets/connect.png'

const FormSection = () => {
  return (
    <>
        <div className='w-full h-56 bg-gradient-to-r from-[#70C0E6] to-navlinkshover mt-32'>
        <div className='flex flex-row items-center justify-between my-8 mx-10'>
            <div>
                <img src={Nurse} alt="Connect" className=' w-[300px] -mt-32'/>
            </div>
            <div className='w-[500px]'>
                <h1 className='text-5xl text-navlinkshover font-bold'>Connect</h1>
                <h1 className='text-5xl text-navlinkshover font-bold'>With</h1>
                <h1 className='text-5xl text-navlinkshover font-bold'>Us</h1>
                <p className='text-white '>See how Blugle delivers <br/> patient care</p>
            </div>
            <div className='flex flex-row-reverse items-center gap-8 mr-32'>
                <div className='bg-white px-4 py-2 rounded-2xl text-xl text-navlinks font-semibold cursor-pointer'>
                    <p>Register</p>
                </div>
                <div className='bg-white px-4 py-2 rounded-2xl text-xl text-navlinks font-semibold cursor-pointer'>
                    <p>Login</p>
                </div>
            </div>
        </div>
        </div>
    </>
    
  )
}

export default FormSection