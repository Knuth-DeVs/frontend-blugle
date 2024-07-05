import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Service/Hero'
import SectionSec from '../components/Service/ServiceSec'
import ContactInfo from '../components/Contact/ContactInfo'
import Footer from '../components/Home/Footer'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <SectionSec/>
        <hr className=' h-1 bg-blue-600 mx-8 md:mx-40 my-12' />
        <div>
            <h1 className='text-blue-500 text-2xl md:text-3xl font-semibold text-center mb-2'>Book An Appointment Today</h1>
            <p className='text-center mx-8 lg:mx-44'>Booking an appointment with us is quick and easy. Our team is ready to assist you with all your healthcare needs. Whether you need a routine check-up, a specialist consultation, or any other medical service, we're here to help. Contact us now to schedule your appointment and take the first step towards better health.</p>
        </div>
        <div className='bg-blue-600 my-10 p-5 md:p-20 mx-8 md:mx-44'>
            <h1 className='text-center text-2xl md:text-4xl text-white'>Schedule Hours</h1>
            <div className='flex flex-row justify-between items-center md:mx-44 text-white pt-5'>
                <p>Mondays</p>
                <hr className='w-5 h-1 bg-white '/>
                <p>09:00AM - 07:00PM</p>
            </div>
            <div className='flex flex-row justify-between items-center md:mx-44 text-white pt-5'>
                <p>Tuesdays</p>
                <hr className='w-5 h-1 bg-white'/>
                <p>09:00AM - 07:00PM</p>
            </div>
            <div className='flex flex-row justify-between items-center md:mx-44 text-white pt-5'>
                <p>Wednesdays</p>
                <hr className='w-5 h-1 bg-white'/>
                <p>09:00AM - 07:00PM</p>
            </div>
            <div className='flex flex-row justify-between items-center md:mx-44 text-white pt-5'>
                <p>Thursdays</p>
                <hr className='w-5 h-1 bg-white'/>
                <p>09:00AM - 07:00PM</p>
            </div>
            <div className='flex flex-row justify-between items-center md:mx-44 text-white pt-5'>
                <p>Fridays</p>
                <hr className='w-5 h-1 bg-white'/>
                <p>09:00AM - 07:00PM</p>
            </div>
            <div className='flex flex-row justify-between items-center md:mx-44 text-white pt-5'>
                <p>Saturdays</p>
                <hr className='w-5 h-1 bg-white'/>
                <p>09:00AM - 07:00PM</p>
            </div>
        <hr className='mx-20 mt-7 mb-20'/>
        </div>
        <ContactInfo/>
        <Footer/>
    </div>
  )
}

export default Services