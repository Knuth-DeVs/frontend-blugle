import React from 'react'
import Vision from '../../assets/vision.png'

const Main: React.FC = () => {
  return (
    <div>
        <div className='my-8'>
            <h2 className='text-center text-2xl md:text-4xl text-navlinks font-bold'>Healthcare combined with technology</h2>
            <p className='text-center px-8 lg:px-44 md:text-xl py-4 md:py-8'>Blugle merges the expertise healthcare an technology pioneers. This union has given us unparalleled national reach and a deep understanding of the healthcare landscape.</p>
            <p className='text-center px-8 md:text-xl lg:px-40'>By broadening our services in revenue cycle management, electronic health records, and patient engagement and by opening our platform to a wider range of partners and providers, we're on a mission to break down barriers and create a more intelligent, seamless healthcare experience</p>
        </div>
        <div className='flex flex-col-reverse px-8 md:flex-row md:gap-16 xl:px-28 md:mt-20'>
            <img src={Vision} alt="vision" className='lg:w-[550px] w-[400px] pt-6'/>
            <div>
                <h1 className='text-3xl md:text-5xl text-navlinks text-center md:text-left font-bold'>Our Vision</h1>
                <p className='text-lg md:text-2xl'>Empowering healthcare providers to deliver exceptional patient care through a seamless, intuitive, and data-driven patient management experience, revolutionizing the way healthcare is delivered and experienced.</p>
            </div>
        </div>
    </div>
  )
}

export default Main