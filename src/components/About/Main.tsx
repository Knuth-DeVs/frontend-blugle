import React from 'react'
import Vision from '../../assets/vision.png'

const Main = () => {
  return (
    <div>
        <div className='my-8'>
            <h2 className='text-center text-4xl text-navlinks font-bold'>healthcare  combined with technology</h2>
            <p className='text-center px-44 text-xl py-8'>Blugle merges the expertise healthcare an technology pioneers. This union has given us unparalleled national reach and a deep understanding of the healthcare landscape.</p>
            <p className='text-center text-xl px-40'>By broadening our services in revenue cycle management, electronic health records, and patient engagement and by opening our platform to a wider range of partners and providers, we're on a mission to break down barriers and create a more intelligent, seamless healthcare experience</p>
        </div>
        <div className='flex flex-row gap-16 px-28 mt-20'>
            <img src={Vision} alt="vision" className='w-[550px]'/>
            <div>
                <h1 className='text-5xl text-navlinks font-bold'>Our Vision</h1>
                <p className='text-2xl'>Empowering healthcare providers to deliver exceptional patient care through a seamless, intuitive, and data-driven patient management experience, revolutionizing the way healthcare is delivered and experienced.</p>
            </div>
        </div>
    </div>
  )
}

export default Main