import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';


interface AppointmentDetails {
  fullName: string,
  email: string,
  phone: string,
  appointmentDate: Date,
  appointmentTime: string,
  reason: string,
}

const Appointment: React.FC = () => {
  const { searchQuery } = useOutletContext<{ searchQuery: string }>();
  const [data, setData] = useState<AppointmentDetails[]>([])

  const Appointment = async () => {
    try {
      const response = await axios.get("https://blugle-server.onrender.com/api/get-appointments")
      setData(response.data.users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Appointment()
  }, [])


  const filteredData = data.filter(
    item =>
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=''>
      <div className="grid grid-cols-4 gap-2 mx-2 md:mx-6 mr-6 md:mr-10 p-3 font-semibold border-b border-gray-400">
        <p>Patients</p>
        <p>Date</p>
        <p>Time</p>
        {/* <p>Location</p> */}
      </div>
      <div className='my-2 overflow-y-auto h-[77vh]'>
      {
          filteredData.length > 0 ? (
            filteredData.map((item, id) => (
              <div key={id} className='grid grid-cols-4 gap-2 mx-2 md:mx-6 md:p-3 border my-2 rounded-md shadow-sm bg-gray-200'>
                <div>
                  <p>{item.fullName}</p>
                  <p className='text-gray-600'>{item.email}</p>
                </div>
                <p>{item.appointmentDate.toLocaleString()}</p>
                <p>{item.appointmentTime}</p>
                {/* <p>{item.location}</p> */}
                <div className='flex items-center gap-2'>
                  <button className='bg-navlinks text-white px-2 py-1 rounded-md hover:opacity-70 duration-300 ease-linear'>Accept</button>
                  <button className='bg-navlinks text-white px-2 py-1 rounded-md hover:opacity-70 duration-300 ease-linear'>Decline</button>
                </div>
              </div>
            ))
          ) : (
            <div className='p-4 text-center text-gray-500'>
              Name or location not found
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Appointment;
