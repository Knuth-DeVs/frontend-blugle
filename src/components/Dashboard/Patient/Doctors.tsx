import React from 'react'
import Doctor1 from '../../../assets/doctor1.png'


const doctors = [
  {id: 1, name: "DR HAGAR OFORI", email: "hagarofori@gmail.com", speciality: "CAEDIOLOGIST", image: Doctor1},
  {id: 2, name: "DR HAGAR OFORI", email: "hagarofori@gmail.com", speciality: "CAEDIOLOGIST", image: Doctor1},
  {id: 3, name: "DR HAGAR OFORI", email: "hagarofori@gmail.com", speciality: "CAEDIOLOGIST", image: Doctor1},
]

const Doctors: React.FC = () => {
  return (
    <div className='max-md:overflow-y-auto max-md:h-[87vh]'>
      <h2 className='text-3xl font-semibold my-3 mx-5'>Our Specialists</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10'>
        {
          doctors.map((item, id) => {
            return(
              <div key={id} className='border rounded-lg flex items-center justify-center flex-col hover:bg-gray-300 duration-300 ease-linear group cursor-pointer hover:shadow-lg'>
                <img src={item.image} alt="" className='w-72' />
                <div className='flex flex-col items-center justify-center group-hover:bg-navlinks group-hover:text-white w-full rounded-bl-lg rounded-br-lg'>
                  <p className='text-2xl font-semibold'>{item.name}</p>
                  <p className='text-gray-500 group-hover:text-white'>{item.email}</p>
                  <p className='font-semibold'>{item.speciality}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Doctors