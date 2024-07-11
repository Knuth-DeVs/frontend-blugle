import React from 'react'

const DoctorInfo: React.FC = () => {
  return (
    <div className='w-full '>
        <div className='w-[2px] h-44 flex justify-center items-center mx-auto mb-2 bg-[#70C0E6]'/>
        <div className='text-lg md:text-2xl font-normal px-5 md:px-24 text-center'>
          <p>Blugle started in 2015 when Dr. Emily Harper wanted to make reliable medical information more accessible. Launched in 2017, it began as a small collection of medical articles. Over time, it grew to include AI diagnostic tools, a large library of research, and a patient support forum. Today, Blugle is a trusted resource helping people manage their health.</p>
          <h3 className='md:text-xl font-semibold text-navlinks py-2 text-md'>Darlington Akpalu, CEO</h3>
        </div>
    </div>
  )
}

export default DoctorInfo