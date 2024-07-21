import React from 'react'


const data = [
  {id: "001", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24"},
  {id: "002", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24"},
  {id: "003", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24"},
  {id: "004", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24"},
  {id: "005", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24"},
  {id: "006", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24"},
  {id: "007", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24"},
  {id: "008", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24"},
  {id: "009", name: "Gabby Tech", email: "test@email.com", contact: "0593536610", location: "Kasoa", regDate: "12/03/24"},
]
const Patients: React.FC = () => {
  return (
    <div className='mx-5'>
        <div className=''>
          <p className='text-2xl font-bold'>Patients List</p>
          <p className='text-gray-500'>Manage your patients request</p>
        </div>
        <div className='bg-gray-200 rounded-xl h-16 my-3 flex items-center justify-between px-3'>
          <div className='flex items-center gap-2'>
            <p className='text-5xl text-blue-600 font-bold'>14</p>
            <p className='text-2xl'>Patients</p>
            <div className='h-12 w-1 bg-gray-300 ml-7'/>
          </div>
          <div className='flex items-center gap-3'>
            <label htmlFor="sort">Sort by:</label>
            <select name="sort" id="" className='bg-gray-300 w-36 rounded-md h-8 outline-none'>
              <option value="name"></option>
              <option value="name">Patient ID</option>
              <option value="name">City</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <div className='mt-4 bg-gray-200 p-2 rounded-md'>
          <div className='grid grid-cols-6 gap-2 p-3 font-semibold border-b border-gray-400'>
            <p>Request ID</p>
            <p>Patients</p>
            <p>Phone Number</p>
            <p>City</p>
            <p>Registration date</p>
          </div>
          <div className='my-2 overflow-y-auto h-[54vh]'>
        {
          data.map((item, id) => {
            return(
              <div key={id} className='grid grid-cols-6 gap-2 p-2 rounded-md shadow-sm'>
                <p className='font-bold'>#{item.id}</p>
                <div>
                  <p>{item.name}</p>
                  <p className='text-gray-600'>{item.email}</p>
                </div>
                <p>{item.contact}</p>
                <p>{item.location}</p>
                <p>{item.regDate}</p>
                <div></div>
              </div>
            )
          })
        }
      </div>
        </div>
    </div>
  )
}

export default Patients