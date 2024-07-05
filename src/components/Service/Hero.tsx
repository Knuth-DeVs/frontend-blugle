import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className='flex flex-col w-full h-[60vh] md:h-[85vh] bg-[#316ff6] items-center justify-center text-white '>
        <h5 className='text-2xl md:text-4xl font-bold'>OUR SERVICES</h5>
        <p className='px-8 lg:px-32 xl:px-80 text-center md:text-2xl pt-8 font-light'>Welcome! Here you can find all the medical service we offer. Whether you need a general check-up, a specialist consultation or diagnostic test, we are here to help. Browse through our service and book an appointment easily.</p>
    </div>
  )
}

export default Hero