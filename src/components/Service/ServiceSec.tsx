import React from 'react'
import Ultrasound from '../../assets/ultrasound.png'
import Chronic from '../../assets/chronic.png'
import Eye from '../../assets/eye1.png'
import MRI from '../../assets/mri.png'
import Blood from '../../assets/blood.png'
import Dialysis from '../../assets/dailysis.png'

const ServiceSec: React.FC = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 mx-8 lg:mx-36 mt-10 gap-10'>
        <div className='border-2 border-blue-500 rounded-md '>
            <img src={Ultrasound} alt="" className='' />
            <h1 className='font-bold pl-2'>ULTRASOUND</h1>
            <p className='text-sm md:text-md pl-2'>Blugle offers comprehensive ultrasound services to help diagnose and monitor various medical conditions. Our advanced imaging technology provides clear and accurate results, ensuring you receive the best care possible</p>
        </div>
        <div className='border-2 border-blue-500 rounded-md '>
            <img src={Chronic} alt="" />
            <h1 className='font-bold pl-2'>CHRONIC DISEASE</h1>
            <p className='text-sm md:text-md pl-2'>Blugle offers comprehensive care for chronic diseases, providing regular monitoring, personalized treatment plans, and continuous support to help you manage your condition effectively</p>
        </div>
        <div className='border-2 border-blue-500 rounded-md '>
            <img src={Eye} alt="" />
            <h1 className='font-bold pl-2'>EYE CARE</h1>
            <p className='text-sm md:text-md pl-2'>At Blugle, we provide comprehensive eye care services to help you maintain healthy vision. Our experienced ophthalmologists offer routine eye exams, treatment for eye conditions, and personalized care tailored to your needs</p>
        </div>
        <div className='border-2 border-blue-500 rounded-md '>
            <img src={MRI} alt="" />
            <h1 className='font-bold pl-2'>MRI</h1>
            <p className='text-sm md:text-md pl-2'>Blugle offers state-of-the-art MRI services, providing detailed imaging to help diagnose and monitor various medical conditions. Our experienced team ensures a comfortable and efficient experience during your MRI scan</p>
        </div>
        <div className='border-2 border-blue-500 rounded-md '>
            <img src={Blood} alt="" />
            <h1 className='font-bold pl-2'>BLOOD SERVICES</h1>
            <p className='text-sm md:text-md pl-2'>Blugle offers comprehensive blood services, including blood tests, donations, and transfusions, ensuring you receive accurate results and essential care quickly and efficiently</p>
        </div>
        <div className='border-2 border-blue-500 rounded-md '>
            <img src={Dialysis} alt="" />
            <h1 className='font-bold pl-2'>DIALYSIS</h1>
            <p className='text-sm md:text-md pl-2'>Blugle offers comprehensive dialysis services to support patients with kidney conditions. Our skilled medical team ensures a safe and comfortable experience, providing both in-center and at-home dialysis options to meet your needs</p>
        </div>

    </div>
  )
}

export default ServiceSec