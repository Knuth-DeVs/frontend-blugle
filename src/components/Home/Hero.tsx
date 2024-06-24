import React from 'react'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div>
      <div className='bg-[rgb(49,111,246)] w-full md:h-[90vh] shadow-lg '>
        <div className='flex flex-col-reverse md:flex-row gap-8 md:gap-32 items-center justify-evenly h-full px-6'>
          <div className='text-white px-4 md:px-16 md:mt-8'>
            <h1 className='text-xl md:text-3xl font-semibold'>Blugle Medical Services</h1>
            <p className='text-4xl md:text-6xl font-bold'>Rapid healthcare solutions in the fastest possible way</p>
            <button className='border-2 border-white rounded-3xl py-2 mt-6 px-6 text-xl hover:scale-110 duration-300 ease-linear'>Let's Connect</button>
            <p className='mt-3 pl-6 pb-4'>We'd love to help</p>
          </div>
          <img src={hero} alt="Hero image" className='md:w-[530px] w-[350px] '/>
        </div>
      </div>
    </div>
  )
}

export default Hero