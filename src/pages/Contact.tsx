import React from 'react'
import Navbar from '../components/Home/Navbar'
import contact from '../assets/contact.png'
import call from '../assets/call.png'
import location from '../assets/location.png'
import email from '../assets/email.png'
import clock from '../assets/clock.png'
import advert from '../assets/contactAvatar.png'
import Footer from '../components/Home/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className='w-full'>
            <img src={contact} alt="" className='max-sm:h-[200px]'/>
        </div>
        <p className='text-[#1941BA] text-2xl font-semibold p-6 md:pl-16'>Find Us Here</p>
        <div>
            <iframe
                title="Map"
                className="md:w-[600px] md:h-[400px] border-0"
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=place_id:ChIJbQ9s3X1J9jERz81h034r77k"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
        <div className='border-2 border-blue-600 rounded-2xl flex flex-row p-2 md:mx-20 gap-6 mt-6 mx-8'>
            <div className='hidden md:block w-[400px] bg-blue-600 rounded-2xl'/>
            <div className='pt-8 md:pt-20 pb-12 md:pb-40'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                    <div>
                        <label>Name</label><br />
                        <input type="text" className='p-2 border-b border-gray-300 rounded-lg w-[340px] md:w-[300px] outline-none'/>
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input type="email" className='p-2 border-b border-gray-300 rounded-lg w-[340px] md:w-[300px] outline-none'/>
                    </div>
                </div>
                <div className='py-5'>
                    <label htmlFor="">Subject</label><br />
                    <input type="text" className='p-2 border-b border-gray-300 rounded-lg w-full pr-10 outline-none' />
                </div>
                <div>
                    <label htmlFor="" className='text-blue-600 font-semibold'>Message</label><br />
                    <textarea name="" id="" placeholder='Type your message here' className='p-2 border-b border-gray-300 rounded-lg w-full h-[130px] outline-none'></textarea>
                </div>
                <button className='bg-navlinks p-2 rounded-xl mt-4 text-white'>Send Message</button>
            </div>
        </div>
        <div className='mt-8 mb-4'>
            <h1 className='text-center text-blue-400'>GET IN TOUCH</h1>
            <h1 className='text-center font-semibold mb-3'>CONTACT</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-6 lg:gap-10 lg:mx-36 '>
                <div className='bg-blue-400 p-4'>
                    <img src={call} alt="" className='w-12 '/>
                    <h3 className='mt-3 text-white font-semibold' >EMERGENCY</h3>
                    <p className='text-white'>(233) 567 975 667</p>
                    <p className='text-white'>(233) 567 975 667</p>
                </div>
                <div className='bg-blue-400 p-4'>
                    <img src={location} alt="" className='w-10 '/>
                    <h3 className='mt-3 text-white font-semibold'>LOCATION</h3>
                    <p className='text-white'>ACCRA, ADANSI ST.</p>
                </div>
                <div className='bg-blue-400 p-4'>
                    <img src={email} alt="" className='w-12 '/>
                    <h3 className='mt-3 text-white font-semibold'>EMAIL</h3>
                    <p className='text-white'>blugle@email.com</p>
                </div>
                <div className='bg-blue-400 p-4'>
                    <img src={clock} alt="" className='w-12 '/>
                    <h3 className='mt-3 text-white font-semibold'>WORKING HOURS</h3>
                    <p className='text-white'>Mon - Fri : 8am - 5pm</p>
                    <p className='text-white'>Sun: Emergency only</p>
                </div>
                
            </div>
        </div>
        <div className='bg-navlinkshover md:mx-24 my-10 rounded-bl-3xl rounded-tr-3xl mx-5'>
            <div className='flex flex-col items-center w-full'>
                <p className='text-center text-white text-2xl md:text-4xl pt-5 md:pt-10'>How helpful were we today?</p>
                <button className='bg-white mt-28 p-2 md:p-3 rounded-3xl font-semibold'>Send a review</button>
            </div>
                <img src={advert} alt="" className='w-36 md:w-44 -mt-36 md:-mt-40'/>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact