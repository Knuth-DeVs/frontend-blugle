import React from 'react'
import Services from '../../assets/service.png'
import Dental from '../../assets/dental.png'
import Neuro from '../../assets/neurology.png'
import Skin from '../../assets/skin.png'
import Eye from '../../assets/eye.png'

const Service = () => {
  return (
    <div className='bg-blue-200 w-full my-16 pt-5 pb-12'>
        <h1 className='text-center text-2xl text'>Services We Provide</h1>
        <div className='flex items-center justify-center mt-8'>
            <img src={Services} alt="" className='w-[500px] '/>
        </div>
        <div className='grid grid-cols-4 gap-4 px-32 -mt-20'>
            <div className='bg-[#70C0E6] pb-4'>
                <img src={Dental} alt="" className='w-28'/>
                <p className='text-navlinkshover text-xl font-semibold pl-2'>Dental Care</p>
                <p className='pl-2 w-44'>We provide the best when it comes to Dental.</p>
                <a href="#" className='pl-2 text-blue-800 pt-8'>Learn more...</a>
            </div>
            <div className='bg-[#70C0E6] pb-4'>
                <img src={Neuro} alt="" className='w-24'/>
                <p className='text-navlinkshover text-xl font-semibold pl-2'>Neurology Care</p>
                <p className='pl-2 w-44'>We provide the best when it comes to Neurology.</p>
                <a href="#" className='pl-2 text-blue-800'>Learn more...</a>
            </div>
            <div className='bg-[#70C0E6] pb-8'>
                <img src={Skin} alt="" className='w-28'/>
                <p className='text-navlinkshover text-xl font-semibold pl-2'>Skin Care</p>
                <p className='p-2 w-44'>We provide the best when it comes to Skin.</p>
                <a href="#" className='pl-2 text-blue-800'>Learn more...</a>
            </div>
            <div className='bg-[#70C0E6] pb-8'>
                <img src={Eye} alt="" className='w-24'/>
                <p className='text-navlinkshover text-xl font-semibold pl-2'>Eye Care</p>
                <p className='pl-2 w-44'>We provide the best when it comes to Eye.</p>
                <a href="#" className='pl-2 text-blue-800'>Learn more...</a>
            </div>
        </div>
    </div>
  )
}

export default Service