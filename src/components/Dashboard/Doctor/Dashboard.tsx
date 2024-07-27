import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';

const request = [
  { id: "001", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Kasoa", status: "Pending" },
  { id: "002", name: "Aaron Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", status: "Pending" },
  { id: "003", name: "Paul Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Mamombi", status: "Pending" },
  { id: "004", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra Girls", status: "Pending" },
  { id: "005", name: "Caleb Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", status: "Pending" },
  { id: "006", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Labadi", status: "Pending" },
  { id: "007", name: "Gabby Tech", email: "test@email.com", date: "12/03/23", time: "12:00am - 3:00pm", location: "Accra", status: "Pending" },
];

const Dashboard: React.FC = () => {
  const { searchQuery } = useOutletContext<{ searchQuery: string }>();
  const filteredRequests = request.filter(
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { fullName } = useUser();

  return (
    <div className="w-[100%]">
      <div className='mx-2 md:mx-6 py-2 md:py-5'>
        <h1 className='text-2xl font-bold'>Hello {fullName || "John"}</h1>
        <p>This is what is happening today</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 mx-5 md:mx-10 xl:mx-20 gap-2 md:gap-8'>
        <div className="bg-gradient-to-t from-blue-800 to-blue-500 p-2 md:p-4 md:w-full rounded-md shadow-xl">
          <p className="text-white text-sm md:text-lg">Total Service Request</p>
          <p className="md:text-4xl font-bold text-xl">000</p>
        </div>
        <div className="bg-gradient-to-t from-blue-800 to-blue-500 md:w-full p-2 md:p-4 rounded-md shadow-xl">
          <p className="text-white text-sm md:text-lg">Upcoming Appointments</p>
          <p className="md:text-4xl font-bold text-xl">14</p>
        </div>
        <div className="bg-gradient-to-t from-blue-800 to-blue-500 md:w-full p-2 md:p-4 rounded-md shadow-xl">
          <p className="text-white text-sm md:text-lg">Total Service Request</p>
          <p className="md:text-4xl font-bold text-xl">000</p>
        </div>
        <div className="bg-gradient-to-t from-blue-800 to-blue-500 md:w-full p-2 md:p-4 rounded-md shadow-xl">
          <p className="text-white text-sm md:text-lg">Total Service Request</p>
          <p className="md:text-4xl font-bold text-xl">000</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-1 mx-2 md:mx-6 ">
        <p className="text-xl md:text-2xl font-bold">Recent Request</p>
        <p>Manage your Patients Request</p>
      </div>
      <div className="grid grid-cols-6 gap-2 mx-2 md:mx-6 mr-6 md:mr-10 bg-gray-200 mt-4 p-3 rounded-tl-2xl font-semibold rounded-tr-2xl border-b border-gray-400">
        <p>Request ID</p>
        <p>Patients</p>
        <p>Date</p>
        <p>Time</p>
        <p>Location</p>
        <p>Status</p>
      </div>
      <div className="overflow-y-auto h-[195px] lg:h-[230px]">
      {
          filteredRequests.length > 0 ? (
            filteredRequests.map((item, id) => (
              <div className="grid grid-cols-6 gap-2 mx-2 md:mx-6 bg-gray-200 md:p-3 border-b" key={id}>
                <p className="font-bold ml-4">#{item.id}</p>
                <div>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </div>
                <p>{item.date}</p>
                <p>{item.time}</p>
                <p className="ml-2">{item.location}</p>
                <p>{item.status}</p>
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
  );
};

export default Dashboard;
