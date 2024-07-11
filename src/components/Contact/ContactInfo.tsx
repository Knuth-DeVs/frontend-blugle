import React from 'react'
import call from '../../assets/call.png'
import location from '../../assets/location.png'
import email from '../../assets/email.png'
import clock from '../../assets/clock.png'

const ContactInfo: React.FC = () => {
  return (
    <div>
        <div className='mt-8 mb-4'>
            <h1 className='text-center text-blue-400'>GET IN TOUCH</h1>
            <h1 className='text-center font-semibold mb-3'>CONTACT</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-6 lg:gap-10 lg:mx-36 text-[10px] md:text-lg'>
                <div className='bg-blue-400 p-4'>
                    <img src={call} alt="" className='w-12 '/>
                    <h3 className='mt-3 text-white font-semibold text-md md:text-xl' >EMERGENCY</h3>
                    <p className='text-white'>(233) 567 975 667</p>
                    <p className='text-white'>(233) 567 975 667</p>
                </div>
                <div className='bg-blue-400 p-4'>
                    <img src={location} alt="" className='w-10 '/>
                    <h3 className='mt-3 text-white font-semibold text-md md:text-xl'>LOCATION</h3>
                    <p className='text-white'>ACCRA, ADANSI ST.</p>
                </div>
                <div className='bg-blue-400 p-4'>
                    <img src={email} alt="" className='w-12 '/>
                    <h3 className='mt-3 text-white font-semibold text-md md:text-xl'>EMAIL</h3>
                    <p className='text-white'>blugle@email.com</p>
                </div>
                <div className='bg-blue-400 p-4'>
                    <img src={clock} alt="" className='w-12 '/>
                    <h3 className='mt-3 text-white font-semibold text-md md:text-xl'>WORKING HOURS</h3>
                    <p className='text-white'>Mon - Fri : 8am - 5pm</p>
                    <p className='text-white'>Sun: Emergency only</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ContactInfo