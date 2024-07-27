import React from 'react';
import { useOutletContext } from 'react-router-dom';

const data = [
  { id: "001", name: "Aaron Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Kaneshie", type: "Remote" },
  { id: "002", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "In Person" },
  { id: "003", name: "Yaw Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Kasoa", type: "Remote" },
  { id: "004", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Lapaz", type: "In Person" },
  { id: "005", name: "John Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Tipper", type: "In Person" },
  { id: "006", name: "Peter Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "Remote" },
  { id: "007", name: "Kwame Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "Remote" },
];

const Appointment: React.FC = () => {
  const { searchQuery } = useOutletContext<{ searchQuery: string }>();
  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=''>
      <div className="grid grid-cols-7 gap-2 mx-2 md:mx-6 mr-6 md:mr-10 p-3 font-semibold border-b border-gray-400">
        <p>Request ID</p>
        <p>Patients</p>
        <p>Date</p>
        <p>Time</p>
        <p>Location</p>
        <p>Type</p>
      </div>
      <div className='my-2 overflow-y-auto h-[77vh]'>
      {
          filteredData.length > 0 ? (
            filteredData.map((item, id) => (
              <div key={id} className='grid grid-cols-7 gap-2 mx-2 md:mx-6 md:p-3 border my-2 rounded-md shadow-sm bg-gray-200'>
                <p className='font-bold'>#{item.id}</p>
                <div>
                  <p>{item.name}</p>
                  <p className='text-gray-600'>{item.email}</p>
                </div>
                <p>{item.date}</p>
                <p>{item.time}</p>
                <p>{item.location}</p>
                <p>{item.type}</p>
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
