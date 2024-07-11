import React from 'react'
import Navbar from '../components/Home/Navbar'
import contact from '../assets/contact.png'
import advert from '../assets/contactAvatar.png'
import Footer from '../components/Home/Footer'
import ContactInfo from '../components/Contact/ContactInfo'

const Contact: React.FC = () => {
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
                allowFullScreen={true}
                loading="lazy"
            ></iframe>
        </div>
        <div className='border-2 border-blue-600 rounded-2xl flex flex-row p-2 md:mx-20 gap-6 mt-6 mx-6'>
            <div className='hidden w-[400px] bg-blue-600 rounded-2xl py-auto md:flex md:flex-col md:items-center md:justify-center'>
                <p className="text-white font-bold text-7xl px-3">Feel Free To Connect With Us.</p>
            </div> 
            <div className='pt-8 md:pt-20 pb-12 md:pb-40 w-full'>
                <div className='flex xl:flex-row justify-between flex-col'>
                    <div>
                        <label>Name</label><br />
                        <input type="text" className='p-2 border-b border-gray-600 rounded-lg w-full outline-none xl:w-[400px]'/>
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input type="email" className='p-2 border-b border-gray-600 rounded-lg w-full outline-none xl:w-[400px]'/>
                    </div>
                </div>
                <div className='py-5'>
                    <label htmlFor="">Subject</label><br />
                    <input type="text" className='p-2 border-b border-gray-600 rounded-lg w-full pr-10 outline-none' />
                </div>
                <div>
                    <label htmlFor="" className='text-blue-600 font-semibold'>Message</label><br />
                    <textarea name="" id="" placeholder='Type your message here' className='p-2 border-b border-gray-600 rounded-lg w-full h-[130px] outline-none'></textarea>
                </div>
                <button className='bg-navlinks p-2 rounded-xl mt-4 text-white hover:scale-105 duration-300 ease-linear'>Send Message</button>
            </div>
        </div>
        <ContactInfo/>
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