import React from 'react'
import Form from './Form'
import Nurse from '../../assets/connect.png'

const FormSection = () => {
  return (
    <>
        <div className='flex flex-row items-center justify-between my-8 mx-10'>
            <div>
                <div className='text-5xl font-bold text-navlinkshover pl-20'>
                    <h1>Connect</h1>
                    <h1>with</h1>
                    <h1>Us</h1>
                </div>
                <p className='text-md font-normal text-gray-500 pl-20'>See how blugle delivers <br /> patient care</p>
                <img src={Nurse} alt="Connect" className=' w-[400px] mt-24'/>
            </div>
            <div>
                <Form/>
            </div>
        </div>
        <div className='w-full h-56 bg-gradient-to-r from-[#70C0E6] to-navlinkshover -mt-80'/>
    </>
    
  )
}

export default FormSection