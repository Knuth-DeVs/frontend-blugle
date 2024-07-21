import React from 'react'


const data = [
  {id: "001", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "Remote"},
  {id: "002", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "In Person"},
  {id: "003", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "Remote"},
  {id: "004", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "In Person"},
  {id: "005", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "In Person"},
  {id: "006", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "Remote"},
  {id: "007", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", type: "Remote"},
]

const Appointment: React.FC = () => {

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
          data.map((item, id) => {
            return(
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
            )
          })
        }
      </div>
    </div>
  )
}

export default Appointment