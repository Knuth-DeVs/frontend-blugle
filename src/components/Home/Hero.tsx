import React from 'react'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div>
      <div className='bg-[#316ff6] w-full h-[90vh] shadow-lg'>
        <div className='flex flex-row gap-32 items-center justify-evenly h-full px-6'>
          <div className='text-white px-16 mt-8'>
            <h1 className='text-3xl font-semibold'>Blugle Medical Services</h1>
            <p className='text-6xl font-bold'>Rapid healthcare solutions in the fastest possible way</p>
            <button className='border-2 border-white rounded-3xl py-2 mt-6 px-6 text-xl hover:scale-110 duration-300 ease-linear'>Let's Connect</button>
            <p className='mt-3 pl-6'>We'd love to help</p>
          </div>
          <img src={hero} alt="Hero image" className='w-[530px] mt-8'/>
        </div>
      </div>
    </div>
  )
}

export default Hero