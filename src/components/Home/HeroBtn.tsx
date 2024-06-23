import React from 'react'
import HomeScrollHorizontal from './HomeSrollHorizontal'

const HeroBtn = () => {
  return (
    <>
      <div className='w-full'>
      <p className='pt-10 text-5xl w-[800px] mx-auto text-center font-medium'>
        Blugle integrates software and services to {" "} <span className='text-navlinks'>simplify clinical tasks</span>{" "} and {" "} <span className='text-navlinks'>enhance overall efficiency</span>.
      </p><div className='bg-navlinks w-[70%] h-1 mx-auto mt-10'/>
      <div className='text-center'>
        <p className=' text-4xl py-8 font-medium text-navlinkshover'>A network that improves care delivery</p>
        <p className=' px-64 text-gray-600 pb-8'>Join a system that helps doctors and nurses provide better care by making it easier to manage patient information, schedule appointments, and communicate with patients.</p>
      </div>
    </div> 
    <HomeScrollHorizontal/> 
    </>
    
  )
}

export default HeroBtn