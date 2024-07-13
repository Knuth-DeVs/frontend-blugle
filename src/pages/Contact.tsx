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
            {/* <div className='bg-blue-500 w-full absolute max-sm:h-[200px]'/> */}
            <img src={contact} alt="" className='max-sm:h-[200px] relative object-cover'/>
        </div>
        <p className='text-[#1941BA] text-2xl font-semibold p-6 md:pl-16'>Find Us Here</p>
        <div className='flex items-center justify-center mx-4 w-90 h-60 lg:w-[95%] lg:mx-10 md:h-[500px]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.9564665604903!2d-0.2150105292321627!3d5.719410781582314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9de3959141d3%3A0xe75a6e72d11a6574!2sBlugle%20Medical%20Services!5e0!3m2!1sen!2sgh!4v1720875228739!5m2!1sen!2sgh"
        allowFullScreen={true}
        className='w-full h-full rounded-lg border-none' 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
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