import React, { useEffect } from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/About/Hero'
import Main from '../components/About/Main'
import Service from '../components/About/Service'
import Testimonial from '../components/About/Testimonial'
import Footer from '../components/Home/Footer'

const About = () => {
  useEffect(() => {
    document.title = "Blugle - About Us"
  })
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Main/>
        <Service/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default About