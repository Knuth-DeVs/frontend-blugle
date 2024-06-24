import React from 'react'
import BannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='mb-6'>
        <div className=' w-full md:h-[400px] bg-[#70C0E6] mt-60 shadow-lg py-6 md:py-0 px-2'>
            <div className='flex flex-row items-center justify-center'>
                <img src={BannerImg} alt='banner' className='w-[380px] pt-3 hidden md:block'/>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl md:text-6xl font-semibold text-navlinkshover'>Our Solutions</h1>
                    <p className='text-white pr-12'>We created an interface that is simple and easy to use in order to handle patientspersonal and medical information, book appointment based on doctor availability,manage patient reports, and send appointment reminders to patients as well as provide updates on the lab reports.</p>
                    <div className='flex items-center justify-evenly text-lg md:text-3xl text-navlinkshover font-semibold'>
                        <div>
                            <p>Patient Information</p>
                            <p>Notifying Patients</p>
                            <p>Updates on lab reports</p>
                        </div>
                        <div>
                            <p>Doctor Information</p>
                            <p>Keep track of appointments</p>
                            <p>Live hospital analysis updates</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner